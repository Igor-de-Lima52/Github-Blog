import { faArrowUpRightFromSquare, faChevronLeft, faCalendarDay, faComment } from "@fortawesome/free-solid-svg-icons";
import { IconsContainer, PostContainer, PostHeaderContainer, PostLoadingContainer, PostMainContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { GitHubContext } from "../../contexts/GitHubContext";
import Markdown from "react-markdown";
import { formatDistanceToNow } from "date-fns";
import { enUS } from "date-fns/locale";

export function Post(){
  const { issue, fetchIssueByNumber, clearIssue } = useContext(GitHubContext);

  const navigate = useNavigate();

  const params = useParams();

  const updatedDateRelativeToNow = issue.updated_at ? formatDistanceToNow(new Date(issue.updated_at), {
    locale: enUS,
    addSuffix: true
  }) : "";

  function handleBack(){
    clearIssue();
    navigate(-1);
  }
  
  useEffect(() => {
    clearIssue();
    fetchIssueByNumber(Number(params.number));
    
    return() => {
      clearIssue();
    };
  }, [params.number, fetchIssueByNumber, clearIssue]);

  return(
    issue && issue.title ? (
      <PostContainer>
        <PostHeaderContainer>
          <div>
            <a onClick={handleBack}>
              <FontAwesomeIcon icon={faChevronLeft} />
              Go back
            </a>
            <a href={issue.html_url} target="_blank">
              See on Github
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
          <h2>{issue.title}</h2>
          <IconsContainer>
            <div>
              <FontAwesomeIcon icon={faGithub} />
              <span>{issue.login}</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faCalendarDay} />
              <span>{updatedDateRelativeToNow}</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faComment} />
              <span>{issue.comments}</span>
            </div>
          </IconsContainer>
        </PostHeaderContainer>
        <PostMainContainer>
          <Markdown>
            {issue.body}
          </Markdown>
        </PostMainContainer>
      </PostContainer>
    ) : (
      <PostLoadingContainer>
        <h2>Loading...</h2>
      </PostLoadingContainer>
    )
  )
}