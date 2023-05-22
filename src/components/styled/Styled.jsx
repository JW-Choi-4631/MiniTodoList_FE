import styled from "styled-components";

export const AppBox = styled.div`
  position: relative;
  max-width: 1200px;
  max-height: 100vh;
  margin: 0 auto;
  padding: 10px;
`;

export const LoginBox = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 28px;
  border-radius: 5px;
  border: 1px solid lightgrey;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 28px;
  width: 60%;
  gap: 3px;
  border: 1px solid lightgrey;
  border-radius: 5px;
`;

export const StyledBtn = styled.button`
  border: none;
  background-color: rgb(23, 206, 96);
  color: white;
  font-weight: bold;
  margin-top: 10px;
  border-radius: 5px;
  height: 30px;
`;

export const NoBackBtn = styled.button`
  display: inline-block;
  border: none;
  width: 30%;
  font-size: 10px;
  font-weight: bolder;
  background-color: white;
  margin: 5px 0px 0px auto;
`;

export const StyledInput = styled.input`
  height: 30px;
  margin-bottom: 0.3px;
  box-shadow: none;
  &:focus {
    outline: 2px solid rgb(23, 206, 96);
  }
`;

export const StyledTextArea = styled.textarea`
  height: 30%;
  overflow: auto;
`;

export const TodoBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  max-height: 100vh;
  gap: 2.5%;
  margin: 20px auto;
  overflow: auto;
`;

export const StructureBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
