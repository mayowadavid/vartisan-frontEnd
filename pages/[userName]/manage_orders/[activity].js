import { useContext } from "react";
import ApproveModal from "../../../components/client-folder/approve_modal";
import ChatMessagePop from "../../../components/client-folder/chatMessagePop";
import ClientOrderOverview from "../../../components/client-folder/clientOrderOverview";
import DisputeModal from "../../../components/client-folder/dispute_modal";
import { MainContext } from "../../../components/context/mainContext";
import Footer from "../../../components/general-folder/footer";
import PrimaryHeader from "../../../components/general-folder/primaryHeader";
import PrimaryMobileHeader from "../../../components/general-folder/primaryMobileHeader";

const orderActivity = () => {
    const {openApprovePop, openDisputePop, openMessagePopUp} = useContext(MainContext);
    return(
        <>
        { openMessagePopUp !== false && (<ChatMessagePop />)}
        { openDisputePop !== false && (<DisputeModal />) }
        { openApprovePop !== false && (<ApproveModal />) }
        <PrimaryHeader />
        <PrimaryMobileHeader />
            <ClientOrderOverview />
        <Footer />
        </>
    );
}

export default orderActivity;