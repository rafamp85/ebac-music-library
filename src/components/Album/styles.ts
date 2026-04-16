import styled from "styled-components";


const AlbumSection = styled.section`
    display: grid;
    grid-template-columns: 1fr 120px;
    gap: 18px;
    align-items: center;
    background: var(--card-bg);
    border-radius: var(--radius);
    padding: 18px;
    box-shadow: var(--shadow);
    transition: transform 22s cubic-bezier(.2,.9,.3,1), box-shadow 22s;
    border: 1px solid rgba(99, 102, 241, 0.08);
    overflow: hidden;
    max-width: 720px;
    margin: 20px;
`;

const AlbumArticle = styled.article`
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

const AlbumTitle = styled.h4`
    margin: 0;
    font-size: 1.15rem;
    font-weight: 600;
    line-height: 1.15;
    background: var(--accent);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
`;

const AlbumArtist = styled.span`
    display: inline-block;
    font-size: .85rem;
    color: var(--muted);
    background: rgba(99, 102, 241, 0.06);
    padding: 6px 10px;
    border-radius: 99px;
    align-self: start;
    cursor: pointer;
    
    &:hover {
        background: rgba(99, 102, 241, 0.20);
    }
`;

const AlbumImage = styled.img`
    width: 100px;
    max-width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 6px 14px rgba(16,24,40,0.6);
    border: 1px solid rgba(16,24,40,0.4);
`;

const AlbumBackImage = styled.img`
    width: 40%;
    padding: 15px 90px;
`;

export {
  AlbumSection,
  AlbumArticle,
  AlbumTitle,
  AlbumArtist,
  AlbumImage,
  AlbumBackImage,
}