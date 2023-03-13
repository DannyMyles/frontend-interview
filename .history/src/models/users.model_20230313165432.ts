export interface Users {
    id: number;
    title: string;
    description: string;
    platformOptions: ["string"];
    image: [
      {
        downloadUri: "string";
        filePath: "string";
      }
    ];
  }