import React from 'react'
import { TabsList, TabsTrigger } from "../../Tabs";

function CustomTabList() {
  return (
    <TabsList>
            {[{ title: "Demo" }, { title: "Code" }, { title: "Props" }].map(
              (item) => {
                return (
                  <TabsTrigger value={item.title} key={item.title}>
                    {item.title}
                  </TabsTrigger>
                );
              }
            )}
          </TabsList>
  )
}

export default CustomTabList