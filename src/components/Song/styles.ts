import styled from "styled-components";

interface SongSpanProps {
  songPeriod?: number;
}

const SongListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
    padding: 25px 10px;
`;

const SongListArticle = styled.article`
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 300px;
    overflow: hidden;
    text-align: center;
`;

const SongListTitle = styled.h2`
    margin: 0;
    padding: 16px;
    font-size: 1.5em;
    color: #333;
    background-color: #f0f0f0;
`;

const SongListImage = styled.img`
    width: 100%;
    height: auto;
`;

const SongListDiv = styled.div`
    width: 100%;
    max-width: 900px; /* limit max width for a good reading */
    margin: 0 auto; /* center */
    padding: 10px 24px;
    border: 2px solid rgba(221, 132, 72, 0.5);
    border-radius: 24px;
`;

const SongArticle = styled.article`
    display: flex;
    gap: 5px;
    justify-content: space-between;
    align-items: center;
`;

const SongSpan = styled.span<SongSpanProps>`
    flex: 1;
    padding: 6px;
    min-width: 0;

    color: ${props => {
      if (props.songPeriod !== undefined) {
          if (props.songPeriod >= 164000) return 'green';
          if (props.songPeriod >= 163000) return 'goldenrod';
          return 'red';
      }
      return 'inherit';

    }};
    
    &:hover {
        color: aqua;
        text-decoration: underline;
        font-weight: 700;
        cursor: pointer;
    }
`;

const SongButtonSpan = styled(SongSpan)`
  flex: 0 0 auto;
  display: flex;
  justify-content: flex-end;
  padding-right: 0;
`;

const SongDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    justify-content: center;
`;

const SongDetailsTitle = styled.h1`
    font-weight: 700;
    cursor: pointer;
    color: white;
    font-size: 18px;
    padding: 16px;

    &:hover {
        color: deeppink;
        text-decoration: underline;
    }
`;


export {
  SongListContainer,
  SongListArticle,
  SongListTitle,
  SongListImage,
  SongListDiv,
  SongArticle,
  SongSpan,
  SongButtonSpan,
  SongDetailsTitle,
  SongDetailsContainer,
}