import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";

import { GitHubContext } from "../../../../contexts/GitHubContext";
import { useContext } from "react";

import { IconsContainer, InfoContainer, NameAndLinkContainer, ProfileContainer } from "./styles";

export function Profile(){
  const { user } = useContext(GitHubContext);  
  return(
      user && (
        <ProfileContainer>
          <img src={user.avatar_url} alt="" />
          <InfoContainer>
            <NameAndLinkContainer>
              <h3>{user.name}</h3>
              <a href={user.html_url} target="_blank">
                Github
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </NameAndLinkContainer>
            <p>{user.bio}</p>
            <IconsContainer>
              <div>
                <FontAwesomeIcon icon={faGithub} />
                <span>{user.login}</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faBuilding} />
                <span>rocketseat</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faUserGroup} />
                <span>{user.followers}</span>
              </div>
            </IconsContainer>
          </InfoContainer>
        </ProfileContainer>
    )
  )
}