import { WorkflowService } from "../../services/WorkflowService";
import WorkflowUnit from "../workflow-unit/WorkflowUnit";
import { WorkflowContainerProps } from "./WorkflowContainerProps";

export const WorkflowContainer: React.FC<WorkflowContainerProps> = (
    props: WorkflowContainerProps,
) => {
    const workflowService = new WorkflowService();
    const userID = props.userID;
    const workflows = workflowService.get(userID);
    const workflowUnits = workflows.map((workflow) => {
        return <WorkflowUnit workflow={workflow} key={workflow.id}></WorkflowUnit>;
    });

    return (
        <div
            style={{
                overflow: "auto",
                display: "flex",
                flexFlow: "column",
                flex: "auto",
            }}
        >
            {workflowUnits}
        </div>
    );
};
