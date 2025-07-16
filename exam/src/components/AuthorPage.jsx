import React from 'react';
import './AuthorPage.css';

export function AuthorPage()
{
    return (
        <div className="authorPage">
            <div className="authorHero">
                <div className="authorCover">
                    <div className="authorInfo">
                        <div className="authorAvatar">
                            <img src="../public/author-avatar.png" alt="ENLEO" />
                        </div>
                        <div className="authorDetails">
                            <h1>ENLEO</h1>
                            <div className='subAndHandle'>
                                <p className="authorHandle">@enleo</p>
                                <p className="authorStats">34.9K subscribers</p>
                            </div>
                            <div className="authorActions">
                                <button className="subscribeBtn">Subscribe</button>
                                <button className="notificationBtn"><img src="../public/bee.png" alt="bee"/></button>
                            </div>
                        </div>
                    </div>
                    <div className="authorDescription">
                        <p>ENLEO Нікіта Леонтьєв - музикант та співак з українського Маріуполя.</p>
                        <img src="../public/strelka.png" alt="strelka"/>
                    </div>
                </div>
            </div>

            <div className="authorNav">
                <button className="navBtn active">HOME</button>
                <button className="navBtn">VIDEOS</button>
                <button className="navBtn">PLAYLISTS</button>
                <button className="navBtn">COMMUNITY</button>
                <button className="navBtn">ABOUT</button>
            </div>

            <div className="featuredSection">
                <div className="featuredVideo">
                    <div className="videoThumbnail">
                        <img src="../public/featured-video.png" alt="Featured Video" />
                        <div className="playButton"><img src="../public/play_circle.png" alt="play"/></div>
                    </div>
                    <div className="featuredInfo">
                        <h2>ENLEO - чорнеморе</h2>
                        <p className="videoStats">703,025 views • Premiered on 26 Apr 2023</p>
                        <p className="videoDescription">
                            Слухай "чорнеморе" на всіх платформах: <a href="#">https://linktr.ee/enleostudio</a>
                        </p>
                        <p className="videoDescription">
                            пісня чорнеморе для мене має особливе місце в серці. вона таїть у собі, мабуть,
                            найсильніше бажання кожного українця - одного теплого, мирного дня поїхати у наш, український Крим...
                        </p>
                    </div>
                </div>
            </div>

            <div className="videoSection">
                <h3>All videos</h3>
                <div className="videoGrid">
                    <div className="videoCard2">
                        <img src="../public/featured-video.png" alt="Video thumbnail" />
                        <div className="videoInfo">
                            <h4>чорнеморе</h4>
                            <p>ENLEO</p>
                            <span>12K views • 1 year ago</span>
                        </div>
                    </div>
                    <div className="videoCard2">
                        <img src="../public/2a.png" alt="Video thumbnail" />
                        <div className="videoInfo">
                            <h4>ЛЮБОВ СИЛЬНІША</h4>
                            <p>ENLEO</p>
                            <span>10K views • 1 year ago</span>
                        </div>
                    </div>
                    <div className="videoCard2">
                        <img src="../public/3a.png" alt="Video thumbnail" />
                        <div className="videoInfo">
                            <h4>ТІНА ЛЮБОВ [ANOTHER LOVE УКРАЇНСЬКОЮ💙💛]</h4>
                            <p>ENLEO</p>
                            <span>12K views • 1 year ago</span>
                        </div>
                    </div>
                    <div className="videoCard2">
                        <img src="../public/4a.png" alt="Video thumbnail" />
                        <div className="videoInfo">
                            <h4>The Neighbourhood - Sweater Weather (Українською)</h4>
                            <p>ENLEO</p>
                            <span>12K views • 1 year ago</span>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="sectionDivider" />

            <div className="videoSection">
                <h3>Music videos</h3>
                <div className="videoGrid">
                    <div className="videoCard2">
                        <img src="../public/3a.png" alt="Video thumbnail" />
                        <div className="videoInfo">
                            <h4>ТІНА ЛЮБОВ [ANOTHER LOVE УКРАЇНСЬКОЮ💙💛]</h4>
                            <p>ENLEO</p>
                            <span>12K views • 1 year ago</span>
                        </div>
                    </div>
                    <div className="videoCard2">
                        <img src="../public/featured-video.png" alt="Video thumbnail" />
                        <div className="videoInfo">
                            <h4>чорнеморе</h4>
                            <p>ENLEO</p>
                            <span>10K views • 1 year ago</span>
                        </div>
                    </div>
                    <div className="videoCard2">
                        <img src="../public/5a.jpg" alt="Video thumbnail" />
                        <div className="videoInfo">
                            <h4>ENLEO - ВЕДИ МЕНЕ В ХРАМ [TAKE ME TO CHURCH УКРАЇНСЬКОЮ]</h4>
                            <p>ENLEO</p>
                            <span>12K views • 1 year ago</span>
                        </div>
                    </div>
                    <div className="videoCard2">
                        <img src="../public/4a.png" alt="Video thumbnail" />
                        <div className="videoInfo">
                            <h4>The Neighbourhood - Sweater Weather (Українською)</h4>
                            <p>ENLEO</p>
                            <span>12K views • 1 year ago</span>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="sectionDivider" />

            <div className="videoSection">
                <h3>Created playlists</h3>
                <div className="playlistGrid">
                    <div className="playlistCard">
                        <div className="playlistThumbnail">
                            <img src="../public/3a.png" alt="Playlist thumbnail" />
                        </div>
                        <div className="playlistInfo">
                            <h4>Українські пісні</h4>
                            <p>ENLEO</p>
                            <span>8 videos</span>
                        </div>
                    </div>
                    <div className="playlistCard">
                        <div className="playlistThumbnail">
                            <img src="../public/6a.png" alt="Playlist thumbnail" />
                        </div>
                        <div className="playlistInfo">
                            <h4>Covers</h4>
                            <p>ENLEO</p>
                            <span>5 videos</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}