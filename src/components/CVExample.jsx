export default function CVExample ({generalInfo, educationalInfo, practicalInfo}) {
    return (
        <div className="cv">
            <div className="generalInfoCv">
                {generalInfo.name}
                {generalInfo.email}
                {generalInfo.number}
            </div>
            <div className="educationalInfoCv">
                {educationalInfo.school}
                {educationalInfo.title}
                {educationalInfo.dateOfStudy}
            </div>
            <div className="practicalInfoCv">
                {practicalInfo.companyName}
                {practicalInfo.title}
                {practicalInfo.text}
                {practicalInfo.startDate}
                {practicalInfo.endDate}
            </div>

        </div>
    )
}