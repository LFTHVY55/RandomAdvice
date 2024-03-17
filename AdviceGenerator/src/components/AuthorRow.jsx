import React from "react";

export default function AuthorRow({ category, advice, author }) {
  return (
    <tr>
      <td>{category}</td>
      <td>{advice}</td>
      <td>{author}</td>
    </tr>
  );
}
