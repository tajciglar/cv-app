import './GeneralInfo.css'

export default function GeneralInfo () {
    return (
        <div className="generalInfo">
            <h3>General Information:</h3>
          <label>Name:<input type="text" />
          </label>
          <label>Email: <input type="email" />
          </label>
          <label>
            Phone number:<input type="tel" />
          </label>
        </div>
      );
}

