// components/RewardsPage.js
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { badges } from "@/data/dataService";

const RewardsPage = () => {
  const [score, setScore] = useState(0);
  const [badge, setBadge] = useState(null);

  useEffect(() => {
    // Generate a random score between 0 and 1000
    const randomScore = Math.floor(Math.random() * 1001);
    setScore(randomScore);

    // Determine the badge based on score
    const earnedBadge = badges.find(
      (badge) => randomScore >= badge.min && randomScore <= badge.max
    );
    setBadge(earnedBadge);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-100">
      <div className="p-16 bg-white rounded-xl shadow-lg w-full max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-8">🎉 Congratulations !!! 🎉</h1>
        <p className="text-xl mb-6">
          You have scored <strong>{score}</strong> points!
        </p>

        {badge && (
          <>
            <p className="text-xl font-semibold">
              You have won the <strong>{badge.name} Badge</strong>!
            </p>
            <Image
              src={badge.image}
              alt={`${badge.name} Badge`}
              width={128}
              height={128}
              className="w-32 h-32 mt-6 mx-auto"
            />
          </>
        )}

        <p className="mt-8 text-gray-500 text-lg">Keep up the great work!</p>
      </div>
    </div>
  );
};

export default RewardsPage;
