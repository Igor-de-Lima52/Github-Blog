import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface UserProps{
  avatar_url: string;
  bio: string | null;
  html_url: string;
  login: string;
  name: string | null;
  followers: number;
}

export interface IssueCardProps{
  body: string;
  number: number;
  title: string;
  updated_at: string;
}

export interface IssueProps{
  body: string;
  title: string;
  updated_at: string;
  comments: number;
  html_url: string;
  login: string;
}

interface GitHubContextType {
  issues: IssueCardProps[];
  fetchIssues: (query? : string) => Promise<void>;
  user: UserProps;
  issue: IssueProps;
  fetchIssueByNumber: (number: number) => Promise<void>;
  clearIssue: () => void;
}

interface GitHubChildrenType{
  children: ReactNode;
}

export const GitHubContext = createContext({} as GitHubContextType);

export function GitHubContextProvider({children}: GitHubChildrenType) {
  const [issues, setIssues] = useState<IssueCardProps[]>([]);
  const [user, setUser] = useState({} as UserProps);
  const [issue, setIssue] = useState({} as IssueProps);

  const owner = "Igor-de-Lima52";
  const repo = "Github-Blog";

  const fetchIssues = useCallback(async (query: string = "") => {
    try{
      const response = await api.get(`search/issues?q=${query}%20repo:${owner}/${repo}`, {
        headers: {
          Authorization: `token ${import.meta.env.VITE_API_ISSUES_TOKEN}`
        }
      });
      
      const fetchedIssues = response.data.items.map((item: any) => {
        return{
          body: item.body,
          number: item.number,
          title: item.title,
          updated_at: item.updated_at
        };
      });

      setIssues(fetchedIssues);
    } catch(error){
      console.log("Erro:", error);
    }
  }, [])

  const fetchUser = useCallback(async () =>{
    try{
      const response = await api.get(`users/${owner}`, {
        headers: {
          Authorization: `token ${import.meta.env.VITE_API_USER_TOKEN}` 
        }
      });
      
      const { avatar_url, bio, html_url, login, name, followers} = response.data;

      setUser({avatar_url, bio, html_url, login, name, followers});
    } catch(error){
      console.log("Erro:", error);
    }
  }, [])
  
  const fetchIssueByNumber = useCallback(async (number: number) => {
    try{
      const response = await api.get(`/repos/${owner}/${repo}/issues/${number}`, {
        headers: {
          Authorization: `token ${import.meta.env.VITE_API_ISSUES_TOKEN}`
        }
      });

      const { body, comments, user, html_url, updated_at, title } = response.data;

      setIssue({body, comments, login: user.login, html_url, updated_at, title});
    }catch(error){
      console.log("Erro:", error);
    }
  }, [])

  const clearIssue = useCallback(() => {
    setIssue({} as IssueProps);
  }, [])
  
  useEffect(() => {
    fetchUser();
    fetchIssues();
  }, [fetchIssues, fetchUser]);
  
  return(
    <GitHubContext.Provider value={{
      issues, 
      fetchIssues, 
      user, 
      issue, 
      fetchIssueByNumber, 
      clearIssue
    }}>
      {children}
    </GitHubContext.Provider>
  )
}