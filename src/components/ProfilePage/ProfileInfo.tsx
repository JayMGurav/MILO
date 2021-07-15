import styled from 'styled-components';

const InfoDiv = styled.div`
  width: var(--size-full);
  padding: var(--size-4) 0;
  text-align: center;
  h1 {
    margin: var(--size-2) 0;
    font-size: var(--system-fontSize-4xl);
  }
  span {
    color: var(--color-iconGray);
  }
`;

interface IMe {
  id: string;
  fullname: string;
  username: string;
  createdAt: string;
}
function ProfileInfo({ me }: { me: IMe }) {
  return (
    <InfoDiv>
      <h1>{me.fullname}</h1>
      <span>@{me.username}</span>
      <br />
    </InfoDiv>
  );
}

export default ProfileInfo;
