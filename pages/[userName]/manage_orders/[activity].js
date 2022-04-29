import ClientOrderOverview from "../../../components/client-folder/clientOrderOverview";
import Footer from "../../../components/general-folder/footer";
import PrimaryHeader from "../../../components/general-folder/primaryHeader";
import PrimaryMobileHeader from "../../../components/general-folder/primaryMobileHeader";

const orderActivity = () => {
    return(
        <>
        <PrimaryHeader />
        <PrimaryMobileHeader />
            <ClientOrderOverview />
        <Footer />
        </>
    );
}

export default orderActivity;