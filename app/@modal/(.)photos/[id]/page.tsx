import type { Metadata, ResolvingMetadata } from "next";
import { Modal } from "./modal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const id = (await params).id;

  return {
    title: `Photo ${id} intercepted`,
  };
}

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const photoId = (await params).id;
  return <Modal>{photoId}</Modal>;
}
