import "./manual-mode-page.css";
import { DetectorControlWidget } from "../../../features/detector-control/ui/detector-control-widget.tsx";

function ManualModePage() {
  return (
    <div className="horizontal-flex-container fit-content">
      <div className="three"></div>
      <div className="six"></div>
      <div className="three">
        <DetectorControlWidget />
      </div>
    </div>
  );
}

export default ManualModePage;
