import { SideBarContainer, UserImage, UserName, SideBarButton } from '../../../../styledcomponents/Profile.js';
import React, { useState } from 'react';

const SideBar = (props) => {
    return (
        <SideBarContainer>
            <UserImage />
            <UserName>
                <p>Laurent's profile</p>
            </UserName>
            <SideBarButton primary={ props.clickedIndex === 0 ? true : false } >
                <button onClick={ () => props.setClickedIndex(0) } >
                    <p><i class="fas fa-star fa-2x"></i><span>Review</span></p>
                </button>
            </SideBarButton>
            <SideBarButton primary={ props.clickedIndex === 1 ? true : false } >
                <button onClick={ () => props.setClickedIndex(1) } >
                    <p><i class="fas fa-comment fa-2x"></i><span>Comments</span></p>
                </button>
            </SideBarButton>
            <SideBarButton primary={ props.clickedIndex === 2 ? true : false } >
                <button onClick={ () => props.setClickedIndex(2) } >
                    <p><i class="fas fa-store fa-2x"></i><span>Restaurants</span></p>
                </button>
            </SideBarButton>
            <SideBarButton primary={ props.clickedIndex === 3 ? true : false } >
                <button onClick={ () => props.setClickedIndex(3) } >
                    <p><i class="fas fa-pen fa-2x"></i><span>Edit profile</span></p>
                </button>
            </SideBarButton>
        </SideBarContainer>
    )
}

export default SideBar;