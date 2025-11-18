"use client";

import { PublishRideForm } from "@/src/components/PublishRideForm";

export default function PublishPage() {
  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-50 px-4">
      <div className="">
        <PublishRideForm
          onPublish={(data) => {
            console.log("Ride Published:", data);
          }}
        />
      </div>
    </div>
  );
}
