import { ToggleButtonGroup, ToggleButton, Form } from "react-aria-components";
import "./detector-control-widget.css";

function DetectorControlWidget() {
  return (
    <Form>
      <label>Выдержка</label>
      <p className="status-text">200мс</p>
      <ToggleButtonGroup>
        <ToggleButton id="50">50</ToggleButton>
        <ToggleButton id="100">100</ToggleButton>
        <ToggleButton id="200">200</ToggleButton>
        <ToggleButton id="500">500</ToggleButton>
        <ToggleButton id="1000">1000</ToggleButton>
        <ToggleButton id="2000">2000</ToggleButton>
      </ToggleButtonGroup>

      <div>Усиление</div>
      <ToggleButtonGroup>
        <ToggleButton id="1">1</ToggleButton>
        <ToggleButton id="2">2</ToggleButton>
        <ToggleButton id="4">4</ToggleButton>
      </ToggleButtonGroup>
    </Form>
  );
}

export { DetectorControlWidget };
