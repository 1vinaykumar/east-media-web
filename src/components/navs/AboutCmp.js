import DropdownButton from "../utils/DropdownButton";

function AboutCmp() {
  return (
    <div className="container">
      <div className="mx-auto rounded-circle bg-success w-75 mt-3 py-3 py-lg-5">
        <h1 className="text-center">East Media</h1>
        <p className="text-center">Telugu News Website</p>
      </div>
      <ul className="list-group mx-5 mt-5">
        <DropdownButton title="Info" buttonClasses="list-group-item bg-primary">
          <div className="card card-body mt-1">
            <h5 className="text-dark text-center">***Under Development***</h5>
          </div>
        </DropdownButton>
      </ul>
    </div>
  );
}

export default AboutCmp;
