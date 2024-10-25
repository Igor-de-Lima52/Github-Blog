import { useContext } from "react";
import { CardIssue } from "../../components/CardIssue";
import { GitHubContext } from "../../contexts/GitHubContext";
import { Profile } from "./components/Profile";
import { HomeContainer, InputSearchContainer, IssuesContainer, SearchContainer } from "./styles";
import { useForm } from "react-hook-form";
import { schema, SearchInput } from "../../formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

export function Home(){
  const { issues, fetchIssues } = useContext(GitHubContext);
  const navigate = useNavigate();

  let publicationsTextSpan;

  switch(issues.length){
    case 0:
      publicationsTextSpan = "No publications";
      break;
    case 1:
      publicationsTextSpan = "1 publication";
      break;
    default:
      publicationsTextSpan = `${issues.length} publications`;
      break;
  }

  const { register, handleSubmit, formState: { errors }} = useForm<SearchInput>({
    resolver: zodResolver(schema)
  })

  async function handleSearch(data: SearchInput){
    fetchIssues(data.query);
  }

  function handleNavigate(number: number){
    navigate(`/post/${number}`);
  }

  return(
    <HomeContainer>
      <Profile />
      <SearchContainer>
        <div>
          <h3>Publications</h3>
          <span>
            {publicationsTextSpan}
          </span>
        </div>
        <form onSubmit={handleSubmit(handleSearch)}>
          <InputSearchContainer 
            placeholder="Search for content" 
            {...register("query")}
          />
          {errors.query && <span>{errors.query.message}</span>}
        </form>
      </SearchContainer>
      <IssuesContainer>
        {
          issues.map(issue => 
            <CardIssue key={issue.updated_at} issueData={issue} onClick={() => handleNavigate(issue.number)}/>
          )  
        }
      </IssuesContainer>
    </HomeContainer>
  )
}