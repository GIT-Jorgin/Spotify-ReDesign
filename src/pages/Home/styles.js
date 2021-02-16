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
    height: 100vh;
    grid-template-columns: 305px 1fr;
    margin: 0;
    padding: 0;
    outline: 0;
`;

export const SideNav = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
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
    background: rgba(255, 255, 255, 0.85);
`;

export const PlayingSong = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
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
`;

export const ControllerIcon = styled.img`
    cursor: pointer;
    padding: 10px;
    border-radius: 100px;

    &:hover{
        background: rgba(0, 0, 0, 0.1)
    }
`;

export const MusicProgress = styled.div`
    display: flex;
    width: 25%;
    align-items: center;
    justify-content: space-between;
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
`;

export const MainContainer = styled.div`
    display: grid;
    grid-template-rows: 3fr 1fr 1fr;
    background: rgba(250, 251, 254, 1);
`;

export const Header = styled.div`
    width: 100%;
    height: 100%;
    background: rgb(29,233,182);
    background: linear-gradient(142deg, rgba(29,233,182,1) 0%, rgba(0,182,234,1) 85%);

`;