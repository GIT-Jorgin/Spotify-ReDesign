import styled from 'styled-components';
import SFProTextBold from '../../fonts/FontsFree-Net-SFProText-Bold.ttf';
import SFProTextLight from '../../fonts/FontsFree-Net-SFProText-Light.ttf';
import SFProTextMedium from '../../fonts/FontsFree-Net-SFProText-Medium-1.ttf';
import SFProTextRegular from '../../fonts/FontsFree-Net-SFProText-Regular-1.ttf';
import SFProTextSemibold from '../../fonts/FontsFree-Net-SFProText-Semibold-1.ttf';

export const Body = styled.div`
    @font-face {
        font-family: 'SF Pro Text Light';
        src: local('SF Pro Text Light'), url(${SFProTextLight}) format('truetype');
        font-weight: 300;
        font-style: normal;
    }
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    display: grid;
    grid-template-columns: 305px 1fr;
    margin: 0;
    padding: 0;
    outline: 0;

    @media(max-width: 566px){
        display: flex;
    }
`;

export const SideNav = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 305px;
    height: calc(100% - 80px);
    background: rgb(0,39,64);
    background: linear-gradient(302deg, rgba(0,39,64,1) 0%, rgba(1,63,94,1) 85%);
    overflow-y: auto;
    overflow-x: hidden;
/* width */
&::-webkit-scrollbar {
  width: 5px;
}

/* Track */
&::-webkit-scrollbar-track {
  border-radius: 100px;
}
 
/* Handle */
&::-webkit-scrollbar-thumb {
  background: #B0A5A8; 
}

/* Handle on hover */
&::-webkit-scrollbar-thumb:hover {
  background: #A5999D;
}

@media(max-width: 566px){
        display: none;
    }
`;

export const GhostNav = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100% - 80px);
    background: rgba(0,39,64, 0);
    overflow-y: auto;
    overflow-x: hidden;

    @media(max-width: 566px){
        display: none;
    }
`;

export const SideNavContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 92%;
`;

export const LogoIMG = styled.img`
    width: 106px;
    height: 32px;

`;

export const MenuGroup = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const MenuGroupTitle = styled.h5`
    @font-face {
        font-family: 'SF Pro Text SemiBold';
        src: local('SF Pro Text SemiBold'), url(${SFProTextSemibold}) format('truetype');
        font-weight: 600;
        font-style: normal;
    }

    color: #FFFF;
    font-family: 'SF Pro Text SemiBold';
    font-size: 14px;
    letter-spacing: 1px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
`;

export const MenuItemList = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const MenuItem = styled.div`
    margin-top: 16px;
    height: 20px;
    align-items: center;
    padding-left: 30px;
    display: flex;
    align-items: center;
`;

export const MenuItemActive = styled.div`
    margin-top: 16px;
    display: flex;
    width: 80%;
    padding: 10px;
    height: 20px;
    padding-left: 30px;
    border-radius: 100px;
    align-items: center;
    background-color: rgba(29, 233, 182, 0.15);
`;

export const MenuItemIcon = styled.img`
    cursor: pointer;
`;

export const MenuPlaylist = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`;

export const MenuItemText = styled.p`
    @font-face {
        font-family: 'SF Pro Text Regular';
        src: local('SF Pro Text Regular'), url(${SFProTextRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }
    cursor: pointer;
    font-family: 'SF Pro Text Regular';
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
    margin-left: 15px;
    line-height: 5px;
`;

export const MusicPlayer = styled.div`
    display: flex;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-around;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 80px;
    background: rgba(255, 255, 255, 0.95);
    z-index: 9999;

    @media(max-width: 718px){
        justify-content: space-between;
    }

    @media(max-width: 566px){
        border-top: 1.5px solid #DADADA;
        background: rgba(255, 255, 255, 0.95);
    }
`;

export const PlayingSong = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: 566px){
        display: none;
    }
`;

export const PlayingSongAlbum = styled.img`
    cursor: pointer;
    border-radius: 2px;
`;

export const PlayingSongName = styled.div`
    display: block;
    margin-top: -3px;
    line-height: 1px;
    margin-left: 10px;
`;

export const MusicName = styled.h4`
    @font-face {
        font-family: 'SF Pro Text Bold';
        src: local('SF Pro Text Bold'), url(${SFProTextBold}) format('truetype');
        font-weight: bold;
        font-style: normal;
    }

    font-family: 'SF Pro Text Bold';
    font-size: 14px;
    color: #1C1E25;
    line-height: 1px;
`;

export const ArtistName = styled.p`
    @font-face {
        font-family: 'SF Pro Text Regular';
        src: local('SF Pro Text Regular'), url(${SFProTextRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    font-family: 'SF Pro Text Regular';
    line-height: 1px;
    font-size: 14px;
    color: #51596D;
`;

export const MusicController = styled.div`
    display: flex;
    width: 22%;
    padding-left: 8%;
    align-items: center;
    justify-content: space-between;

    @media(max-width: 934px){
        padding-left: 0%;
    }

    @media(max-width: 750px){
        margin-left: -70px;
    }

    @media(max-width: 566px){
        display: none;
    }
`;

export const RespMusicController = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;

    @media(min-width: 567px){
        display: none;
    }
`;

export const ControllerIcon = styled.img`
    cursor: pointer;
    padding: 10px;
    border-radius: 100px;
    outline: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    &:hover{
        background: rgba(0, 0, 0, 0.1)
    }
`;

export const MusicProgress = styled.div`
    display: flex;
    width: 25%;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 934px){
        width: 16%
    }



    @media(max-width: 566px){
        display: none;
    }
`;

export const MusicProgressCount = styled.h1`
    @font-face {
            font-family: 'SF Pro Text Light';
            src: local('SF Pro Text Light'), url(${SFProTextLight}) format('truetype');
            font-weight: 300;
            font-style: normal;
        }
    font-family: 'SF Pro Text Light';
    font-size: 12px;
    color: rgba(81, 89, 109, 0.8);
`;

export const MusicVolume = styled.div`
    display: flex;
    align-items: center;

    @media(max-width: 850px){
        margin-left: -80px;
    }

    @media(max-width: 566px){
        display: none;
    }
`;

export const MainContainer = styled.div`
    display: grid;
    max-width: calc(100vw - 305px);
    height: calc(100vh + 300px);
    grid-template-rows: 340px 330px 330px;

    @media(max-width: 566px){
        max-width: 100vw;
        width: 100vw;
        height: calc(100vh + 180px);
    }
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    background: rgb(29,233,182);
    background: linear-gradient(158deg, rgba(29,233,182,1) 0%, rgba(0,182,234,1) 85%);
`;
export const HeaderNav = styled.div`
    display: flex;
    position: absolute;
    width: calc(100vw - 350px);
    height: 70px;
    align-items: center;
    justify-content: space-between;

    @media(max-width: 566px){
        width: 90vw;
    }
`;

export const SearchContent = styled.div`
    width: 230px;
    height: 30px;
    z-index: 999;
    
    @media(max-width: 507px){
        width: 200px;
    }

    @media(max-width: 335px){
        width: 150px;
    }

    @media(max-width: 277px){
        width: 117px;
    }
`;

export const SearchInputIcon = styled.img`
    position: absolute;
    width: 18px;
    margin: 9px 0px 0px 10px;
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 35px;
    z-index: 9999;
    padding: 0px 20px 0px 35px;
    border: 0;
    border-radius: 100px;
    outline: none;
    color: #51596D;
    background: rgba(255, 255, 255, 0.3);
    @font-face {
        font-family: 'SF Pro Text Regular';
        src: local('SF Pro Text Regular'), url(${SFProTextRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    font-family: 'SF Pro Text Regular';

    &::placeholder{
        color: #51596D;
    }
`;

export const UserPic = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 100px;
    cursor: pointer;
`;

export const HeaderInfo = styled.div`
    position: absolute;
    left: 410px;
    display: block;
    max-width: 500px;
    
    @media(max-width: 2600px){
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
    }

    @media(max-width: 1121px){
        margin-top: 10px;
        left: 350px;
        z-index: 100;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media(max-width: 1667px){
        margin-top: 10px;
    }

    @media(max-width: 800px){
        width: 50vw;
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    @media(max-width: 566px){
        width: 100vw;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
    }

    @media(max-width: 507px){
        max-width: 90vw;
    }
`;

export const HeaderIMG = styled.img`
    position: absolute;
    right: 100px;
    align-self: flex-end;
    width: 370px;
    opacity: .4;

    @media(max-width: 1121px){
        right: 40px;
    }

    @media(max-width: 800px){
        height: 345px;
        right: 15px;
        width: auto;
        opacity: .1;
        position: absolute;
    }
`;

export const HeaderTitle = styled.h1`
    @font-face {
            font-family: 'SF Pro Text Light';
            src: local('SF Pro Text Light'), url(${SFProTextLight}) format('truetype');
            font-weight: 300;
            font-style: normal;
        }
    margin-top: 70px;
    line-height: 48px;
    font-family: 'SF Pro Text Light';
    font-weight: 300;
    font-size: 50px;
    color: #FFF;
    z-index: 999;

    @media(max-width: 1121px){
        text-align: center;
    }

    @media(max-width: 840px){
        font-size: 35px;
        line-height: 40px;
    }

    @media(max-width: 800px){
        font-size: 30px;
        line-height: 35px;
    }

    @media(max-width: 566px){
        font-size: 30px;
        line-height: 35px;
    }
`;

export const HeaderDesc = styled.h5`
    @font-face {
        font-family: 'SF Pro Text Regular';
        src: local('SF Pro Text Regular'), url(${SFProTextRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }
    font-weight: 400;
    font-family: 'SF Pro Text Regular';
    font-size: 16px;
    color: #FFF;
    z-index: 999;

    @media(max-width: 1121px){
        text-align: center;
        margin-top: 10px;
    }

    @media(max-width: 800px){
        margin-top: 10px;
    }

    @media(max-width: 566px){
        margin-top: 10px;
    }
`;

export const HeaderInteract = styled.div`
    display: flex;
    width: 270px;
    justify-content: space-between;
`;

export const HeaderButton = styled.button`
    @font-face {
        font-family: 'SF Pro Text SemiBold';
        src: local('SF Pro Text SemiBold'), url(${SFProTextSemibold}) format('truetype');
        font-weight: 600;
        font-style: normal;
    }
    
    cursor: pointer;
    z-index: 999;
    font-family: 'SF Pro Text SemiBold';
    font-weight: 600;
    width: 160px;
    outline: none;
    height: 36px;
    background: white;
    border: 0px;
    border-radius: 100px;
    color: #1DE9B6;
    font-size: 14px;
`;

export const HeaderAction = styled.img`
    cursor: pointer;
    z-index: 999;
`;

export const Releases = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const ReleasesTitle = styled.h4`
    align-self: flex-start;
    margin-top: 30px;
    @font-face {
        font-family: 'SF Pro Text Medium';
        src: local('SF Pro Text Medium'), url(${SFProTextMedium}) format('truetype');
        font-weight: 500;
        font-style: normal;
    }
    font-family: 'SF Pro Text Medium';
    font-weight: 500;
    font-size: 18px;
    color: #1D1F26;
    padding-left: 60px;

    @media(max-width: 566px){
        padding-left: 25px;
    }
`;

export const ReleasesContainer = styled.div`
    margin-top: -15px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    flex-direction: column;
    width: calc(95vw - 305px);
    margin-left: 3vw;
    height: 265px;
    overflow-x: scroll;

    &::-webkit-scrollbar {
        height: 6px;
    }

/* Track */
    &::-webkit-scrollbar-track {
        border-radius: 100px;
    }
 
/* Handle */
    &:hover{
        &::-webkit-scrollbar-thumb {
        background: #B0A5A8; 
        border-radius: 100px;
    }
    }
    
/* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
        background: #B0A5A8;
    }

    @media(max-width: 566px){
        width: 100%;
        margin-left: 0px;
    }

    @media(max-width: 397px){
        width: 98vw;
    }

    @media(max-width: 326px){
        width: 90vw;
    }
`;

export const ReleasesColumn = styled.div`
    padding: 0px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 350px;
    height: 65px;
    margin: 10px;
    background: white;
`;

export const ReleaseAlbum = styled.div`
    display: flex;
    align-items: center;
`;

export const ReleaseAutorContainer = styled.div`
    display: block;
    margin-top: -5px;
    line-height: 1px;
    margin-left: 10px;
`;

export const ReleaseName = styled.h5`
    color: #1C1E25;
    @font-face {
        font-family: 'SF Pro Text Bold';
        src: local('SF Pro Text Bold'), url(${SFProTextBold}) format('truetype');
        font-weight: bold;
        font-style: normal;
    }
    font-weight: bold;
    font-family: 'SF Pro Text Bold';
    font-size: 14px;
`;

export const ReleaseAutor = styled.p`
    margin-top: -5px;
    color: #51596D;
    @font-face {
        font-family: 'SF Pro Text Regular';
        src: local('SF Pro Text Regular'), url(${SFProTextRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }
    font-weight: 400;
    font-family: 'SF Pro Text Regular';
    font-size: 14px;
`;

export const ReleaseAction = styled.div`
    display: flex;
    align-items: center;
`;

export const ReleaseTime = styled.span`
    @font-face {
            font-family: 'SF Pro Text Light';
            src: local('SF Pro Text Light'), url(${SFProTextLight}) format('truetype');
            font-weight: 300;
            font-style: normal;
        }
    font-family: 'SF Pro Text Light';
    font-size: 14px;
    font-weight: 300;
    color: rgba(81, 89, 109, 0.8);
`;

export const Recommended = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: calc(95vw - 305px);
    height: 100%;
    margin-bottom: 100px;
`;

export const RecommendedTitle = styled.h4`
    align-self: flex-start;
    margin-top: 30px;
    @font-face {
        font-family: 'SF Pro Text Medium';
        src: local('SF Pro Text Medium'), url(${SFProTextMedium}) format('truetype');
        font-weight: 500;
        font-style: normal;
    }
    font-family: 'SF Pro Text Medium';
    font-weight: 500;
    font-size: 18px;
    color: #1D1F26;
    padding-left: 60px;

        @media(max-width: 566px){
        width: 200px;
        padding-left: 25px;
    }
`;

export const RecommendedContainer = styled.div`
    display: flex;
    width: calc(96vw - 305px);
    margin-left: 3vw;
    padding-bottom: 10px;
    overflow-x: scroll;
    &::-webkit-scrollbar {
        height: 6px;
    }

    @media(min-width: 1800px) and (max-width: 2600px){
        margin-left: 1.6vw;
    }

/* Track */
    &::-webkit-scrollbar-track {
        border-radius: 100px;
    }
 
/* Handle */
    &:hover{
        &::-webkit-scrollbar-thumb {
        background: #B0A5A8; 
        border-radius: 100px;
    }
    }
    
/* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
        background: #B0A5A8;
    }

    @media(max-width: 566px){
        width: 98vw;
        margin-left: 0px;
    }

    @media(max-width: 326px){
        width: 97vw;
    }
`;