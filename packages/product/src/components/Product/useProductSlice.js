import { useState } from "react"
import cup1 from "./cup1.jpg"

export const useProductSlice = () => {
  const [product] = useState({
    name: "Cup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra et nisl id lobortis. Integer congue velit et nunc luctus, quis fringilla massa facilisis. Quisque sit amet pulvinar est, consectetur efficitur dolor. Nulla ultricies sollicitudin nulla id vestibulum. Proin bibendum facilisis neque, vel facilisis nulla finibus a. Cras dignissim, lacus at eleifend mollis, lorem sem pretium nibh, vel venenatis ante felis rhoncus ligula. Donec posuere sit amet velit sit amet posuere. Ut at sapien lacus. Donec et imperdiet dolor. Quisque ac nibh et nibh accumsan ullamcorper. Mauris metus enim, cursus in ante sed, lacinia suscipit nibh. In hac habitasse platea dictumst. Aliquam ut odio ut est mollis tempus pellentesque gravida orci. Aliquam vel sagittis lorem.",
    featuredImage: { alt: "Cupt alt text", src: cup1 },
  })

  return { state: { ...product } }
}
