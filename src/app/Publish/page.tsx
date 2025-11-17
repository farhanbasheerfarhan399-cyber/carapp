"use client";
import PublishRideForm from "@/src/components/PublishRideForm";

export default function Page() {
  const handlePublish = (data: any) => {
    console.log("Published ride:", data);
    // Later: API call, save to DB, etc.
  };

  return <PublishRideForm onPublish={handlePublish} />;
}
