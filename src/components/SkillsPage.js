import { Container } from "react-bootstrap";

export default function SkillsPage(){
    return(
        <Container>
            <div>
                <h2 className="Subheading">Programming Languages</h2>
                <img src="https://skillicons.dev/icons?i=c,cpp,cs,java,js,html,css,haskell,py" className="img-fluid Icon" style={{paddingBottom : '5%'}} alt="Skill Icons"/>
                <h2 className="Subheading">Libraries/Frameworks</h2>
                <img src="https://skillicons.dev/icons?i=react,bootstrap,express,nodejs" className="img-fluid Icon" style={{paddingBottom : '5%'}} alt="Skill Icons"/>
                <h2 className="Subheading">Databases</h2>
                <img src="https://skillicons.dev/icons?i=mysql,mongo,firebase" className="img-fluid Icon" style={{paddingBottom : '5%'}} alt="Skill Icons"/>
                <h2 className="Subheading">Other Technologies</h2>
                <img src="https://skillicons.dev/icons?i=unity,git,github,vscode,visualstudio,postman,ubuntu" className="img-fluid Icon" style={{paddingBottom : '5%'}} alt="Skill Icons"/>
            </div>
        </Container>
    );
}