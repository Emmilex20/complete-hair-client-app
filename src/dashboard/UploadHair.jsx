import React, { useState } from "react";
import { Button, Checkbox, Label, Textarea, TextInput } from "flowbite-react";

const UploadHair = () => {
  const hairCategories = [
    "Long",
    "Short",
    "Curly",
    "Wavy",
    "Straight",
    "Thick",
    "Thin",
    "New",
    "Dangles",
    "Featured",
  ]
  const [selectedHairCategory, setSelectedHairCategory] = useState(hairCategories[0]);

  const handleChangeSelectedValue = (event) => {
    console.log("Selected Value: ", event.target.value);
    setSelectedHairCategory(event.target.value);
  };

      // handle hair submission
      const handleHairSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        console.log("Form submitted with values:", {
          title: event.target.title.value,
          price: event.target.price.value,
          imageURL: event.target.imageURL.value,
          hairCategory: selectedHairCategory,
          hairDescription: event.target.hairDescription.value,
        });

        const hairObj = {
          title: event.target.title.value,
          price: event.target.price.value,
          imageURL: event.target.imageURL.value,
          hairCategory: selectedHairCategory,
          hairDescription: event.target.hairDescription.value,
        }

        // send data to server
        fetch("https://complete-hair-client-server-3.onrender.com/upload-hairs", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(hairObj),
        }).then(res => res.json()).then(data => {
          // console.log(data)
          alert("Hair uploaded successfully!");
          form.reset();
        });
      };
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold font-quickSand">Upload A Hair</h2>

      <form onSubmit={handleHairSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* First Row */}
      <div className="flex gap-8">
      <div className="lg:w-1/2">
        <div className="mb-2 block">
          <Label htmlFor="title" value="Hair Title" />
        </div>
        <TextInput id="title" type="text" name="title" placeholder="Hair Name..." required />
      </div>
      <div className="lg:w-1/2">
        <div className="mb-2 block">
          <Label htmlFor="price" value="Price" />
        </div>
        <TextInput id="price" type="text" name="price" placeholder="Hair Price..." required />
      </div>
      </div>
      
      {/* Second Row */}
      <div className="flex gap-8">
      <div className="lg:w-1/2">
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Hair Image URL" />
        </div>
        <TextInput id="imageURL" type="text" name="imageURL" placeholder="Hair Image URL..." required />
      </div>
      <div className="lg:w-1/2">
      <div className="mb-2 block">
          <Label htmlFor="inputState" value="Hair Category" />
        </div>
          <select id="inputState" name="categoryName" className="w-full rounded" value={selectedHairCategory} onChange={handleChangeSelectedValue}>
              {
                hairCategories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))
              }
          </select>

      </div>
      </div>

      {/* Hair Descriptions */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="hairDescription" value="Hair Description" />
        </div>
        <Textarea id="hairDescription" name="hairDescription" className="w-full" placeholder="Hair Description...." required rows={6} />
      </div>
      
      <Button type="submit" className="bg-teal-400 mt-5">Upload</Button>

    </form>
    </div>
  );
};

export default UploadHair;
