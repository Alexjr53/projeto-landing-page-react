import React from "react"
import './TeamCard.css'

function TeamCard({imageUrl, name, position, description}){
    return(
        <div className="teamMember">
            <div className="topBoxUser">
              <div className="boxAvatar">
                <img src={imageUrl} alt={name} />
              </div>
              <div className="infoUser">
                <p className='memberName'>{name}</p>
                <p className='memberDescription' >{position}</p>
              </div>
            </div>
            <div className="descriptionUserBox">
              <p>{description}</p>
            </div>
        </div>
    )
}

export default TeamCard