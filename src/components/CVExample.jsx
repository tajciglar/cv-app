export default function CVExample ({generalInfo}) {
    return (
        <div className="cv">
            <div className="generalInfoCv">
                {generalInfo.name}
                {generalInfo.email}
                {generalInfo.number}
            </div>
        </div>
    )
}