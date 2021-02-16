import React, { useState } from 'react';
import Slider from '@material-ui/core/Slider';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { 
    Body,
    SideNav,
    LogoIMG,
    SideNavContainer,
    MenuGroup,
    MenuGroupTitle,
    MenuItemList,
    MenuItem,
    MenuItemIcon,
    MenuItemText,
    MenuItemActive,
    MusicPlayer,
    MenuPlaylist,
    PlayingSong,
    PlayingSongAlbum,
    PlayingSongName,
    MusicName,
    ArtistName,
    MusicController,
    ControllerIcon,
    MusicProgress,
    MusicProgressCount,
    MusicVolume,
    MainContainer
} from './styles';
import Logo from '../../images/logo.png';
import IconExplore from '../../images/icon_explore.png';
import icon_hear_this from '../../images/icon_hear_this.png';
import IconRadio from '../../images/icon_radio.png';
import IconLastAdded from '../../images/icon_last_added.png';
import IconFavoriteSongs from '../../images/icon_favorite_songs.png';
import IconArtists from '../../images/icon_artists.png';
import IconSongs from '../../images/icon_songs.png';
import IconGenres from '../../images/icon_genres.png';
import IconPlaylist from '../../images/icon_playlist.png';
import IconAddPlaylist from '../../images/icon_add_playlist.png';
import Album from '../../images/album.png'
import IconShuffle from '../../images/icon_shuffle.png';
import IconBack from '../../images/icon_back.png';
import ButtonPause from '../../images/button_pause.png';
import IconNext from '../../images/icon_next.png';
import IconReplay from '../../images/icon_replay.png';
import IconVolume from '../../images/icon_volume.png';

export default function Home(){


      const ProgressMusicSlider = withStyles({
        root: {
          marginTop: 3,
          color: '#1DE9B6',
          height: 8,
          width: 270
        },
        thumb: {
          height: 14,
          width: 14,
          marginTop: -5,
          marginLeft: -12,
          '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
          },
        },
        active: {},
        valueLabel: {
          left: 'calc(-50% + 4px)',
        },
        track: {
          height: 4,
          borderRadius: 4,
        },
        rail: {
          height: 4,
          borderRadius: 4,
        },
      })(Slider);
      
      const MusicVolumeSlider = withStyles({
        root: {
          marginTop: 3,
          color: '#1DE9B6',
          height: 8,
          width: 120,
        },
        thumb: {
          height: 14,
          width: 14,
          marginTop: -5,
          marginLeft: -12,
          '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
          },
        },
        active: {},
        valueLabel: {
          left: 'calc(-50% + 4px)',
        },
        track: {
          height: 4,
          borderRadius: 4,
        },
        rail: {
          height: 4,
          borderRadius: 4,
        },
      })(Slider);

    return(
        <Body>
            <MusicPlayer>
                <PlayingSong>
                    <PlayingSongAlbum src={Album} />
                    <PlayingSongName>
                        <MusicName>MOOD</MusicName>
                        <ArtistName>24kGoldn</ArtistName>
                    </PlayingSongName>
                </PlayingSong>
                <MusicController>
                    <ControllerIcon src={IconShuffle} />
                    <ControllerIcon src={IconBack} />
                    <ControllerIcon src={ButtonPause} />
                    <ControllerIcon src={IconNext} />
                    <ControllerIcon src={IconReplay} />
                </MusicController>
                <MusicProgress>
                    <MusicProgressCount>0:45</MusicProgressCount>
                    <ProgressMusicSlider aria-label="pretto slider" defaultValue={40} />
                    <MusicProgressCount>2:20</MusicProgressCount>
                </MusicProgress>
                <MusicVolume>
                    <ControllerIcon src={IconVolume} />
                    <MusicVolumeSlider aria-label="pretto slider" defaultValue={55} />
                </MusicVolume>
            </MusicPlayer>
            <SideNav>
                <SideNavContainer>
                    <LogoIMG alt="Spotify" src={Logo} />
                    <MenuGroup style={{marginTop: 30}}>
                        <MenuGroupTitle>PROCURAR MUSICA</MenuGroupTitle>
                        <MenuItemList>
                            <MenuItem style={{marginTop: 5}}>
                                <MenuItemIcon src={IconExplore} />
                                <MenuItemText>Explorar</MenuItemText>
                            </MenuItem>
                            <MenuItemActive>
                                <MenuItemIcon src={icon_hear_this} />
                                <MenuItemText style={{color: 'rgba(29, 233, 182, 1)'}}>Ouça agora</MenuItemText>
                            </MenuItemActive>
                            <MenuItem>
                                <MenuItemIcon src={IconRadio} />
                                <MenuItemText>Radio</MenuItemText>
                            </MenuItem>
                        </MenuItemList>
                    </MenuGroup>
                    <MenuGroup style={{marginTop: 20}}>
                        <MenuGroupTitle>SUA BIBLIOTECA</MenuGroupTitle>
                        <MenuItemList>
                            <MenuItem style={{marginTop: 5}}>
                                <MenuItemIcon src={IconLastAdded} />
                                <MenuItemText>Ultimas adicionadas</MenuItemText>
                            </MenuItem>
                            <MenuItem>
                                <MenuItemIcon src={IconFavoriteSongs} />
                                <MenuItemText>Favoritas</MenuItemText>
                            </MenuItem>
                            <MenuItem>
                                <MenuItemIcon src={IconArtists} />
                                <MenuItemText>Artistas</MenuItemText>
                            </MenuItem>
                            <MenuItem>
                                <MenuItemIcon src={IconSongs} />
                                <MenuItemText>Musicas</MenuItemText>
                            </MenuItem>
                            <MenuItem>
                                <MenuItemIcon src={IconGenres} />
                                <MenuItemText>Generos</MenuItemText>
                            </MenuItem>
                        </MenuItemList>
                    </MenuGroup>
                    <MenuGroup style={{marginTop: 20, paddingBottom: 60}}>
                        <MenuPlaylist>
                            <MenuGroupTitle>PLAYLISTS</MenuGroupTitle>
                            <MenuItemIcon src={IconAddPlaylist} />
                        </MenuPlaylist>
                        <MenuItemList>
                            <MenuItem style={{marginTop: 5}}>
                                <MenuItemIcon src={IconPlaylist} />
                                <MenuItemText>Sextou</MenuItemText>
                            </MenuItem>
                            <MenuItem>
                                <MenuItemIcon src={IconPlaylist} />
                                <MenuItemText>De volta à infância</MenuItemText>
                            </MenuItem>
                            <MenuItem>
                                <MenuItemIcon src={IconPlaylist} />
                                <MenuItemText>Meu Top-100</MenuItemText>
                            </MenuItem>
                            <MenuItem>
                                <MenuItemIcon src={IconPlaylist} />
                                <MenuItemText>Treino pesado</MenuItemText>
                            </MenuItem>
                        </MenuItemList>
                    </MenuGroup>
                </SideNavContainer>
            </SideNav>
            <MainContainer>
                
            </MainContainer>
        </Body>
    )
}