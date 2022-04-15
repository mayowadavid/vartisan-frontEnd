import React from 'react'
import VartisanHeader from '../../components/creator-folder/vartisanHeader';
import VartisanMobileHeader from '../../components/creator-folder/vartisanMobileHeader';
import Sidebar from '../../components/creator-folder/sidebar';

const Wallet = () => {
  return (
    <div className="dashboard_wrapper">
        <Sidebar />
        <div className="admin_content">
            <VartisanHeader />
            <VartisanMobileHeader />
            <div className="admin_body">
                <div className="admin_container">
                    <div className="wallet_board">
                        <p>Wallet</p>
                        <div className="wallet_showcase">
                            <div className="wallet_wrapper">
                                <div className="wallet_card">
                                    <p>Wallet Amount</p>
                                    <p>$1124.99</p>
                                </div>
                                <div className="wallet_card">
                                    <p>Withdrawn</p>
                                    <p>$1000.99</p>
                                </div>
                                <div className="wallet_card">
                                    <p>Used for purchase</p>
                                    <p>$14</p>
                                </div>
                                <div className="wallet_card">
                                    <p>Pending</p>
                                    <p>$44.99</p>
                                </div>
                                <div className="wallet_card">
                                    <p>Available for Withdrawal</p>
                                    <p>$124.99</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="payment_option">
                        <p>Get Paid</p>
                        <div className="payment_option_row">
                            <div className="payment_option_container">
                                <p>Bank Transfer</p>
                            </div>
                            <div className="payment_option_container">
                                <p>Paypal Account</p>
                            </div>
                            <div className="payment_option_container">
                                <p>Payoneer Card</p>
                            </div>
                        </div>
                    </div>
                    <div className="payment_history">
                        <p>Payment History</p>
                        <div className="payment_table_wrapper">
                            <div className="payment_history_table">
                                <div className="payment_history_header">
                                    <div className="payment_date payment_header_color">
                                        <p>Date</p>
                                    </div>
                                    <div className="payment_title payment_header_color">
                                        <p>Payment title</p>
                                    </div>
                                    <div className="payment_fees payment_header_color">
                                        <p>Fees</p>
                                    </div>
                                    <div className="payment_amount payment_header_color">
                                        <p>Amount</p>
                                    </div>
                                </div>
                                <div className="payment_history_row">
                                    <div className="payment_date payment_body">
                                        <p>Oct 28 21</p>
                                    </div>
                                    <div className="payment_title payment_body">
                                        <p>Pending clearance</p>
                                    </div>
                                    <div className="payment_fees payment_fee">
                                        <p>$4.00</p>
                                    </div>
                                    <div className="payment_amount payment_fee">
                                        <p>$16.00</p>
                                    </div>
                                </div>
                                <div className="payment_history_row">
                                    <div className="payment_date payment_body">
                                        <p>Oct 28 21</p>
                                    </div>
                                    <div className="payment_title payment_body">
                                        <p>Pending clearance</p>
                                    </div>
                                    <div className="payment_fees payment_fee">
                                        <p>$4.00</p>
                                    </div>
                                    <div className="payment_amount payment_fee">
                                        <p>$16.00</p>
                                    </div>
                                </div>
                                <div className="payment_history_row">
                                    <div className="payment_date payment_body">
                                        <p>Oct 28 21</p>
                                    </div>
                                    <div className="payment_title payment_body">
                                        <p>Pending clearance</p>
                                    </div>
                                    <div className="payment_fees payment_fee">
                                        <p>$4.00</p>
                                    </div>
                                    <div className="payment_amount payment_fee">
                                        <p>$16.00</p>
                                    </div>
                                </div>
                                <div className="payment_history_row">
                                    <div className="payment_date payment_body">
                                        <p>Oct 28 21</p>
                                    </div>
                                    <div className="payment_title payment_body">
                                        <p>Pending clearance</p>
                                    </div>
                                    <div className="payment_fees payment_fee">
                                        <p>$4.00</p>
                                    </div>
                                    <div className="payment_amount payment_fee">
                                        <p>$16.00</p>
                                    </div>
                                </div>
                                <div className="payment_history_row">
                                    <div className="payment_date payment_body">
                                        <p>Oct 28 21</p>
                                    </div>
                                    <div className="payment_title payment_body">
                                        <p>Pending clearance</p>
                                    </div>
                                    <div className="payment_fees payment_fee">
                                        <p>$4.00</p>
                                    </div>
                                    <div className="payment_amount payment_fee">
                                        <p>$16.00</p>
                                    </div>
                                </div>
                                <div className="payment_history_row">
                                    <div className="payment_date payment_body">
                                        <p>Oct 28 21</p>
                                    </div>
                                    <div className="payment_title payment_body">
                                        <p>Pending clearance</p>
                                    </div>
                                    <div className="payment_fees payment_fee">
                                        <p>$4.00</p>
                                    </div>
                                    <div className="payment_amount payment_fee">
                                        <p>$16.00</p>
                                    </div>
                                </div>
                                <div className="payment_history_row">
                                    <div className="payment_date payment_body">
                                        <p>Oct 28 21</p>
                                    </div>
                                    <div className="payment_title payment_body">
                                        <p>Pending clearance</p>
                                    </div>
                                    <div className="payment_fees payment_fee">
                                        <p>$4.00</p>
                                    </div>
                                    <div className="payment_amount payment_fee">
                                        <p>$16.00</p>
                                    </div>
                                </div>
                                <div className="payment_history_row">
                                    <div className="payment_date payment_body">
                                        <p>Oct 28 21</p>
                                    </div>
                                    <div className="payment_title payment_body">
                                        <p>Pending clearance</p>
                                    </div>
                                    <div className="payment_fees payment_fee">
                                        <p>$4.00</p>
                                    </div>
                                    <div className="payment_amount payment_fee">
                                        <p>$16.00</p>
                                    </div>
                                </div>
                                <div className="payment_history_more">
                                    <p>Show more</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Wallet;