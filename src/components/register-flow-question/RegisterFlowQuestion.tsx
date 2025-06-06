import "./RegisterFlowQuestion.css"

interface RegisterFlowQuestionProps {
  title: string;
  subtitle: string;
}

export const RegisterFlowQuestion = ({ title, subtitle}: RegisterFlowQuestionProps) => {

    return (
        <div className="register_flow_question__container">
            <h2>{title}</h2>
            <p>{subtitle}</p>

        </div>
    );
};