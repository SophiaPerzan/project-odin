import DashboardLayout from '../../components/layouts/DashboardLayout';
import { Workflow } from './models/Workflow';
import WorkflowUnit from './components/workflow-unit/WorkflowUnit';
import { WorkflowCommandBar } from './components/workflow-command-bar/WorkflowCommandBar';
import * as icons from '@ant-design/icons/lib/icons';
import { ScheduledWorkflowBar } from './components/scheduled-workflow-bar/ScheduledWorkflowBar';
import { WorkflowService } from './services/WorkflowService';

function Workflows() {

    const workflowService = new WorkflowService();
    const userID = "0";
    const workflows = workflowService.get(userID);
    const workflowUnits = workflows.map((workflow) => {
        return <WorkflowUnit workflow={workflow} key={workflow.id}></WorkflowUnit>
    });

    return (
        <DashboardLayout>
            <span>Let's automate things!</span>
            <div style={{overflow: "auto", display: 'flex', flexFlow: 'column', flex: "auto"}}>
                <div>
                    {workflowUnits}
                </div>
                <div style={{marginTop: "auto"}}>
                    <WorkflowCommandBar></WorkflowCommandBar>
                    <ScheduledWorkflowBar></ScheduledWorkflowBar>
                </div>
            </div>
        </DashboardLayout>
    );
}

export default Workflows;