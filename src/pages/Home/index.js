import React, { useState } from 'react';
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';
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
    MainContainer,
    Header,
    HeaderInfo,
    HeaderIMG,
    HeaderTitle,
    HeaderDesc,
    HeaderInteract,
    HeaderButton,
    HeaderAction,
    Releases,
    ReleasesTitle,
    ReleasesContainer,
    ReleasesColumn,
    ReleaseAlbum,
    ReleaseAutorContainer,
    ReleaseName,
    ReleaseAutor,
    ReleaseAction,
    ReleaseTime,
    GhostNav,
    Recommended,
    RecommendedTitle,
    RecommendedContainer,
    RespMusicController
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
import bitmap from '../../images/bitmap.png';
import buttonFavorite from '../../images/button_favorites.png';
import buttonShare from '../../images/button_share.png';
import album1 from '../../images/album-1.png';
import album2 from '../../images/album-2.png';
import album3 from '../../images/album-3.png';
import album4 from '../../images/album-4.png';
import album5 from '../../images/album-5.png';
import album6 from '../../images/album-6.png';
import album7 from '../../images/album-7.png';
import album8 from '../../images/album-8.png';
import album9 from '../../images/album-9.png';
import iconPlayMini from '../../images/icon_play_mini.png';
import iconLikeMini from '../../images/icon_like_mini.png';
import iconPauseMini from '../../images/icon_pause_mini.png';
import iconLikedMini from '../../images/icon_liked_mini.png';
import AlbumA from '../../images/albumA.png';
import AlbumB from '../../images/albumB.png';
import AlbumC from '../../images/albumC.png';
import AlbumD from '../../images/albumD.png';
import AlbumE from '../../images/albumE.png';
import AlbumF from '../../images/albumF.png';
import playRespIcon from '../../images/playRespIcon.png';
import searchRespIcon from '../../images/searchRespIcon.png';
import heartRespIcon from '../../images/heartRespIcon.png';
import configRespIcon from '../../images/configRespIcon.png';

export default function Home() {


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

    return (
        <Body>
            <MusicPlayer>
                <PlayingSong>
                    <PlayingSongAlbum src={Album} />
                    <PlayingSongName>
                        <MusicName>MOOD</MusicName>
                        <ArtistName>24kGoldn</ArtistName>
                    </PlayingSongName>
                </PlayingSong>
                <RespMusicController>
                    <img width="38" src={searchRespIcon} />
                    <img width="40" src={playRespIcon} />
                    <img width="40" src={heartRespIcon} />
                    <img width="30" src={configRespIcon} />
                </RespMusicController>
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
            <GhostNav>
            </GhostNav>
            <SideNav>
                <SideNavContainer>
                    <LogoIMG alt="Spotify" src={Logo} />
                    <MenuGroup style={{ marginTop: 30 }}>
                        <MenuGroupTitle>PROCURAR MUSICA</MenuGroupTitle>
                        <MenuItemList>
                            <MenuItem style={{ marginTop: 5 }}>
                                <MenuItemIcon src={IconExplore} />
                                <MenuItemText>Explorar</MenuItemText>
                            </MenuItem>
                            <MenuItemActive>
                                <MenuItemIcon src={icon_hear_this} />
                                <MenuItemText style={{ color: 'rgba(29, 233, 182, 1)' }}>Ouça agora</MenuItemText>
                            </MenuItemActive>
                            <MenuItem>
                                <MenuItemIcon src={IconRadio} />
                                <MenuItemText>Radio</MenuItemText>
                            </MenuItem>
                        </MenuItemList>
                    </MenuGroup>
                    <MenuGroup style={{ marginTop: 20 }}>
                        <MenuGroupTitle>SUA BIBLIOTECA</MenuGroupTitle>
                        <MenuItemList>
                            <MenuItem style={{ marginTop: 5 }}>
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
                    <MenuGroup style={{ marginTop: 20, paddingBottom: 60 }}>
                        <MenuPlaylist>
                            <MenuGroupTitle>PLAYLISTS</MenuGroupTitle>
                            <MenuItemIcon src={IconAddPlaylist} />
                        </MenuPlaylist>
                        <MenuItemList>
                            <MenuItem style={{ marginTop: 5 }}>
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
                <Header>
                    <HeaderInfo>
                        <HeaderTitle>Os maiores sucessos da semana</HeaderTitle>
                        <HeaderDesc>Vibrações de músicas novas para um ótimo humor durante o dia com energia e paixão!</HeaderDesc>
                        <HeaderInteract>
                            <HeaderButton>ESCUTAR AGORA</HeaderButton>
                            <HeaderAction width="40" src={buttonFavorite} />
                            <HeaderAction width="40" src={buttonShare} />
                        </HeaderInteract>
                    </HeaderInfo>
                    <HeaderIMG src={bitmap} />
                </Header>
                <Releases>
                    <ReleasesTitle>Ultimos lançamentos</ReleasesTitle>
                    <ReleasesContainer>
                        <ReleasesColumn>
                            <ReleaseAlbum>
                                <img style={{cursor: 'pointer', width: 20}} src={iconPlayMini} />
                                <img style={{ marginLeft: 10 }} src={album1} />
                                <ReleaseAutorContainer>
                                    <ReleaseName>Mister Radio</ReleaseName>
                                    <ReleaseAutor>Louder</ReleaseAutor>
                                </ReleaseAutorContainer>
                            </ReleaseAlbum>
                            <ReleaseAction>
                                <ReleaseTime>2:45</ReleaseTime>
                                <img style={{ marginLeft: 30, cursor: 'pointer', width: 20 }} src={iconLikeMini} />
                            </ReleaseAction>
                        </ReleasesColumn>
                        <ReleasesColumn>
                            <ReleaseAlbum>
                                <img style={{cursor: 'pointer', width: 20}} src={iconPauseMini} />
                                <img style={{ marginLeft: 10 }} src={Album} />
                                <ReleaseAutorContainer>
                                    <ReleaseName>MOOD</ReleaseName>
                                    <ReleaseAutor>24kGoldn</ReleaseAutor>
                                </ReleaseAutorContainer>
                            </ReleaseAlbum>
                            <ReleaseAction>
                                <ReleaseTime>2:45</ReleaseTime>
                                <img style={{ marginLeft: 30, cursor: 'pointer', width: 20 }} src={iconLikedMini} />
                            </ReleaseAction>
                        </ReleasesColumn>
                        <ReleasesColumn>
                            <ReleaseAlbum>
                                <img style={{cursor: 'pointer', width: 20}} src={iconPlayMini} />
                                <img style={{ marginLeft: 10 }} src={album3} />
                                <ReleaseAutorContainer>
                                    <ReleaseName>Skylines</ReleaseName>
                                    <ReleaseAutor>Hello forever</ReleaseAutor>
                                </ReleaseAutorContainer>
                            </ReleaseAlbum>
                            <ReleaseAction>
                                <ReleaseTime>2:45</ReleaseTime>
                                <img style={{ marginLeft: 30, cursor: 'pointer', width: 20 }} src={iconLikeMini} />
                            </ReleaseAction>
                        </ReleasesColumn>
                        <ReleasesColumn>
                            <ReleaseAlbum>
                                <img style={{cursor: 'pointer', width: 20}} src={iconPlayMini} />
                                <img style={{ marginLeft: 10 }} src={album4} />
                                <ReleaseAutorContainer>
                                    <ReleaseName>Lighthouse</ReleaseName>
                                    <ReleaseAutor>Sweet, but psycho</ReleaseAutor>
                                </ReleaseAutorContainer>
                            </ReleaseAlbum>
                            <ReleaseAction>
                                <ReleaseTime>2:45</ReleaseTime>
                                <img style={{ marginLeft: 30, cursor: 'pointer', width: 20 }} src={iconLikeMini} />
                            </ReleaseAction>
                        </ReleasesColumn>
                        <ReleasesColumn>
                            <ReleaseAlbum>
                                <img style={{cursor: 'pointer', width: 20}} src={iconPlayMini} />
                                <img style={{ marginLeft: 10 }} src={album5} />
                                <ReleaseAutorContainer>
                                    <ReleaseName>Blackpink</ReleaseName>
                                    <ReleaseAutor>Kill this love</ReleaseAutor>
                                </ReleaseAutorContainer>
                            </ReleaseAlbum>
                            <ReleaseAction>
                                <ReleaseTime>3:44</ReleaseTime>
                                <img style={{ marginLeft: 30, cursor: 'pointer', width: 20 }} src={iconLikeMini} />
                            </ReleaseAction>
                        </ReleasesColumn>
                        <ReleasesColumn>
                            <ReleaseAlbum>
                                <img style={{cursor: 'pointer', width: 20}} src={iconPlayMini} />
                                <img style={{ marginLeft: 10 }} src={album6} />
                                <ReleaseAutorContainer>
                                    <ReleaseName>BMTH</ReleaseName>
                                    <ReleaseAutor>Mantra</ReleaseAutor>
                                </ReleaseAutorContainer>
                            </ReleaseAlbum>
                            <ReleaseAction>
                                <ReleaseTime>3:53</ReleaseTime>
                                <img style={{ marginLeft: 30, cursor: 'pointer', width: 20 }} src={iconLikeMini} />
                            </ReleaseAction>
                        </ReleasesColumn>
                        <ReleasesColumn>
                            <ReleaseAlbum>
                                <img style={{cursor: 'pointer', width: 20}} src={iconPlayMini} />
                                <img style={{ marginLeft: 10 }} src={album7} />
                                <ReleaseAutorContainer>
                                    <ReleaseName>MARUV</ReleaseName>
                                    <ReleaseAutor>Crooked</ReleaseAutor>
                                </ReleaseAutorContainer>
                            </ReleaseAlbum>
                            <ReleaseAction>
                                <ReleaseTime>3:26</ReleaseTime>
                                <img style={{ marginLeft: 30, cursor: 'pointer', width: 20 }} src={iconLikeMini} />
                            </ReleaseAction>
                        </ReleasesColumn>
                        <ReleasesColumn>
                            <ReleaseAlbum>
                                <img style={{cursor: 'pointer', width: 20}} src={iconPlayMini} />
                                <img style={{ marginLeft: 10 }} src={album8} />
                                <ReleaseAutorContainer>
                                    <ReleaseName>Fallulah</ReleaseName>
                                    <ReleaseAutor>Dysfunctional</ReleaseAutor>
                                </ReleaseAutorContainer>
                            </ReleaseAlbum>
                            <ReleaseAction>
                                <ReleaseTime>3:44</ReleaseTime>
                                <img style={{ marginLeft: 30, cursor: 'pointer', width: 20 }} src={iconLikeMini} />
                            </ReleaseAction>
                        </ReleasesColumn>
                        <ReleasesColumn>
                            <ReleaseAlbum>
                                <img style={{cursor: 'pointer', width: 20}} src={iconPlayMini} />
                                <img style={{ marginLeft: 10 }} src={album9} />
                                <ReleaseAutorContainer>
                                    <ReleaseName>Zero One One</ReleaseName>
                                    <ReleaseAutor>In cold blood</ReleaseAutor>
                                </ReleaseAutorContainer>
                            </ReleaseAlbum>
                            <ReleaseAction>
                                <ReleaseTime>2:45</ReleaseTime>
                                <img style={{ marginLeft: 30, cursor: 'pointer', width: 20 }} src={iconLikeMini} />
                            </ReleaseAction>
                        </ReleasesColumn>
                    </ReleasesContainer>
                </Releases>
                <Recommended>
                    <RecommendedTitle>Albums recomendados</RecommendedTitle>
                    <RecommendedContainer>
                        <img style={{marginLeft: 20}} src={AlbumA} />
                        <img style={{marginLeft: 20}} src={AlbumB} />
                        <img style={{marginLeft: 20}} src={AlbumC} />
                        <img style={{marginLeft: 20}} src={AlbumD} />
                        <img style={{marginLeft: 20}} src={AlbumE} />
                        <img style={{marginLeft: 20}} src={AlbumF} />
                    </RecommendedContainer>
                </Recommended>
            </MainContainer>
        </Body>
    )
}