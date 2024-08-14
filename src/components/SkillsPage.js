import { Container } from "react-bootstrap";

export default function SkillsPage(){
    return(
        <Container>
            <div className="IconHolder" style={{paddingBottom: '35%'}}>
                <h3 className="Subheading">Languages</h3>
                <img src="https://skillicons.dev/icons?i=c,cpp,cs,java,js,html,css,haskell,py" className='img-fluid d-block' style={{paddingBottom : '5%'}} alt="Skill Icons"/>
                <h3 className="Subheading">Libraries/Frameworks</h3>
                <img src="https://skillicons.dev/icons?i=react,bootstrap,express,nodejs" className="img-fluid d-block" style={{paddingBottom : '5%'}} alt="Skill Icons"/>
                <h3 className="Subheading">Databases</h3>
                <img src="https://skillicons.dev/icons?i=mysql,mongo,firebase" className="img-fluid d-block" style={{paddingBottom : '5%'}} alt="Skill Icons"/>
                <h3 className="Subheading">Other Technologies</h3>
                <img src="https://skillicons.dev/icons?i=unity,git,github,vscode,visualstudio,postman,ubuntu" className="img-fluid d-block" style={{paddingBottom : '5%'}} alt="Skill Icons"/>
            </div>
        </Container>
    );
}