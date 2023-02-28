import styled from "styled-components";

export const StyleSignIn = styled.div`
.auth-layout-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 30px;
   
}
.selected {
    display: flex;
flex-direction: row;
padding: 0px;
gap: 36px;
}
input[name="login"] {
    accent-color:#00CDC2;
    ;
    color-scheme: light;
   }
   [color-scheme="light"] {
    color-scheme: light;
  }
#formLogin {
    width: 380px
   
}
.form-group label {
    width: 205px;
  height: 20px;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
/* identical to box height, or 125% */


/* Neutral/70 */

color: #4D4D4D;
}
.form-control {
    border-radius: 5px;
    border: 1px solid #E5E5E5;
    background-color: #E5E5E5
    height: 50px
}
.rememberBox {
    display: flex;
}
.forgot {
    margin-left: 120px;
    width: 153px;
height: 19px;


font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 19px;
/* identical to box height */
color: #00CDC2;
text-align: right;
text-decoration-line: underline;

}
#btn-login {
    background: linear-gradient(0deg, #00CDC2, #00CDC2), #FFFFFF;
    border :none
    height: 50px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.4);
    border-radius: 25px;
}
#btn-signUpNew {
    width: 212px;
height: 19px;
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;
text-decoration-line: underline;
color: #00CDC2;

}
`
