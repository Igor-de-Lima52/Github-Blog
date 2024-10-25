import { formatDistanceToNow } from "date-fns";
import { IssueCardProps } from "../../contexts/GitHubContext";
import { CardIssueContainer } from "./styles";
import { enUS } from "date-fns/locale";

interface CardIssueProps{
  issueData: IssueCardProps;
  onClick: () => void;
}

export function CardIssue({ issueData, onClick }: CardIssueProps){
  const updatedDateRelativeToNow = issueData.updated_at ? formatDistanceToNow(new Date(issueData.updated_at), {
    locale: enUS,
    addSuffix: true
  }) : "";
  
  return(
    <CardIssueContainer onClick={onClick}>
      <div>
        <h4>{issueData.title}</h4>
        <span>{updatedDateRelativeToNow}</span>
      </div>
      <p>
        {issueData.body}
      </p>
    </CardIssueContainer>
  )
}