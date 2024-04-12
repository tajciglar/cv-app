

export default function CVExample ({generalInfo, educationalInfo, practicalInfo}) {
    return (
        <div className="cv">
            <div className="nameInfoCv">
                <h3>{generalInfo.name}</h3>
            </div>
            <div className="contactInfoCv">
                <h4>Contact Information:</h4>
                <span> {generalInfo.email}</span>
                <span>{generalInfo.number}</span>
            </div>
            <div className="mainInformation">
                <div className="educationalInfoCv">
                    <h4>Educational Infromation:</h4>
                    <span><b>School: </b>{educationalInfo.school}</span>
                    <span><b>Title: </b>{educationalInfo.title}</span>
                    <span><b>Date of study: </b>{educationalInfo.dateOfStudy}</span>
                </div>
                <div className="practicalInfoCv">
                    <h4>Practical Information:</h4>
                    <span><b>Company name: </b>{practicalInfo.companyName}</span>
                    <span><b>Job title: </b>{practicalInfo.title}</span>
                    <span><b>Main responsibilities: </b>{practicalInfo.text}</span>
                    <span><b>Start date: </b>{practicalInfo.startDate}</span>
                    <span><b>End date: </b>{practicalInfo.endDate}</span>
                </div>
            </div>
        </div>
    )
}