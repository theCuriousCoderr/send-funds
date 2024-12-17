"use client";

import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { X, Copy, CreditCard, User, PiggyBank } from "lucide-react";
import { toast } from "react-toastify";

const Abeg = () => {
  return (
    <figure>
      <img src="/src/assets/tukay.jpeg" alt=" abeg naa. help me" />
    </figure>
  );
};

export default function HeroSection() {
  const [modalVisible, setModalVisible] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState(null);
  const [moveNoCount, setMoveNoCount] = useState(1);
  const [acctDetails, setAcctDetails] = useState({
    acctNo: "7037887923",
    bankName: "PalmPay",
    acctName: "Olalekan Oladimeji Segun",
  });

  const moveNoButton = () => {
    setMoveNoCount(moveNoCount + 1);
    const randomTop = Math.random() * 80 + 10; // Random top position (10% to 90%)
    const randomLeft = Math.random() * 80 + 10; // Random left position (10% to 90%)
    setNoButtonPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
  };

  const handleYesClick = () => {
    setModalVisible(true);
    setNoButtonPosition(null);
    setMoveNoCount(1);
  };
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast("Thank you, my helper")
  };
  const handleCheckClick = () => {
    setModalVisible(false);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000); // Hide confetti after 5 seconds
  };
  const handleDisable = () => {
    setDisabled(!disabled);

    if (!disabled) {
      setTimeout(() => {
        setDisabled(false);
      }, 500);
    }
  };
  const onClose = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    let searchParams = new URLSearchParams(window.location.search);
    let acctNo = searchParams.get("acctNo");
    let bankName = searchParams.get("bankName");
    let acctName = searchParams.get("acctName");

    if (acctNo && bankName && acctName) {
      setAcctDetails({
        acctNo: acctNo,
        bankName: bankName,
        acctName: acctName,
      });
    } else {
      setAcctDetails({
        acctNo: "7037887923",
        bankName: "PalmPay",
        acctName: "Olalekan Oladimeji Segun",
      });
    }
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center bg-gradient-to-b from-black via-purple-900/30 to-black">
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          colors={["#a855f7", "#7e22ce"]}
        />
      )}
      {moveNoCount % 3 === 0 && (
        <div className="animate-bounce fixed h-screen w-full flex items-end justify-center">
          <Abeg />
        </div>
      )}
      <div className="container relative mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Send <span className="text-purple-400">Funds</span>
          </h1>
          <div className="flex gap-2 justify-center items-center">
            <button
              className={`bg-purple-600 hover:bg-purple-700 text-white px-8 py-2 rounded-lg transition-colors focus:hidden disabled:bg-purple-600/20 disabled:text-white/20  ${
                noButtonPosition ? "absolute" : "relative"
              }`}
              style={noButtonPosition || {}}
              onMouseEnter={moveNoButton}
              // onFocus={handleDisable}
              onClick={moveNoButton}
              disabled={disabled}
            >
              No
            </button>
            <button
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-2 rounded-lg transition-colors"
              onClick={handleYesClick}
              onFocus={handleDisable}
            >
              Yes
            </button>
          </div>
        </div>
      </div>

      {modalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-10 rounded-lg shadow-lg w-96 relative">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
              onClick={onClose}
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold mb-6 text-purple-600 flex items-center gap-2">
              <CreditCard className="w-6 h-6 text-purple-500" />
              Account Details
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-gray-500" />
                  <p className="text-gray-700">Account Number:</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{acctDetails.acctNo}</span>
                  <button
                    className="text-purple-600 hover:text-purple-700"
                    onClick={() => copyToClipboard(acctDetails.acctNo)}
                  >
                    <Copy className="w-5 h-5" /> 
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <PiggyBank className="w-5 h-5 text-gray-500" />
                  <p className="text-gray-700">Bank Name:</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{acctDetails.bankName}</span>
                  <button
                    className="text-purple-600 hover:text-purple-700"
                    onClick={() => copyToClipboard(acctDetails.bankName)}
                  >
                    <Copy className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-between gap-2">
                  <User className="w-5 h-5 text-gray-500" />

                  <span className="font-medium">{acctDetails.acctName}</span>
                  <button
                    className="text-purple-600 hover:text-purple-700"
                    onClick={() => copyToClipboard("Raphael Tomiwa Jesse")}
                  ></button>
                </div>
              </div>
            </div>
            <button
              className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors w-full"
              onClick={handleCheckClick}
            >
              Sent
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
