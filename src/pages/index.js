
import Conference from "../components/Conference";
import Featured from "../components/Featured";

import DateUtils from "../utils/date-utils";
import FileUtils from "../utils/file-utils";

function Index({ conferences }) {

    const conferencesAsHTML = conferences.map((c, i) => {
        return <Conference key={i} {...c} />;
    });

    return (
        <>

            <p className="text-white">Featured</p>

            <Featured />

            <li className="d-flex justify-content-between align-items-start text-light">
                <p className="me-auto">Deadlines</p>
                <span className="">Your timezone is <span className="text-success">{DateUtils.getTimeZone()}</span></span>
            </li>

            {conferencesAsHTML}
        </>
    );
}

export async function getStaticProps() {

    return {
        props: {
            conferences: await FileUtils.getDeadlines()
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 1 seconds
        revalidate: 1, // In seconds
    };
}

export default Index;
