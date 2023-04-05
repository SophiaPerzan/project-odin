import DashboardLayout from "../../components/layouts/DashboardLayout";
import { WorkflowCommandBar } from "./components/workflow-command-bar/WorkflowCommandBar";
import { ScheduledWorkflowBar } from "./components/scheduled-workflow-bar/ScheduledWorkflowBar";

function Workflows() {
    return (
        <DashboardLayout>
            <span>Let's automate things!</span>

            <div style={{ marginTop: "auto" }}>
                <WorkflowCommandBar></WorkflowCommandBar>
                <ScheduledWorkflowBar></ScheduledWorkflowBar>
            </div>
        </DashboardLayout>
    );
}

export default Workflows;
