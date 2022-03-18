import styled from "styled-components";

export const Style =styled.div`
display: flex;
margin-top:30px;
padding-bottom:20px;
align-items:center;
.left-content{
        flex:40%;
        display:flex;
        align-items:center;
        .logo-content{
            img{
                display:inline-block;
                padding-right:20px;
            }
        }
        .info-content-logo{
            div{
                &:first-child{
                    margin-bottom:10px;
                }
            }
        }
    }
    .right-content{
        display: flex;
        flex:60%;
        .right-content-left{
            flex:50%;
            div{
                &:first-child{
                    padding-bottom:20px;
                };
            }
        }
        .right-content-right{
            flex:50%;
            div{
                &:first-child{
                    padding-bottom:20px;
                };
                &:last-child{
                    display:flex;
                    align-items: baseline;
                    span{
                        padding-right:20px;
                    }
                }
            }
        }
    }
`;
export default Style;