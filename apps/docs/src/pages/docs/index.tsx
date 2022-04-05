import React from "react";
import Text from "@ui/Text/Text";
import Box from "@ui/Box/Box";
import { RadioGroup } from "@ui/Radio";
import Radio from "@ui/Radio/Radio";
import DisplayCode from "components/DisplayCode";
import Checkbox from "@ui/Checkbox/Checkbox";
import LeadText from "components/LeadText";
import BaseContainer from "components/BaseContainer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ui/Tabs";
import CustomTabList from "components/CustomTabList";
import DropdownStyled from "@ui/Dropdown/Dropdown";
import { ACTIONS } from "extras/static-data";
import { styled } from "theme/stitches.config";
import Input from "@ui/Input/Input";
import { useTheme } from "next-themes";
import { Button } from "@ui/Button/Button";
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "@ui/Dialog";
import Layout from "components/Layout/Layout";

export const TriggerButton = styled("button", {
  all: "unset",
  fontFamily: "inherit",
  display: "inline-block",
  p: "$4",
  borderRadius: "$md",
  alignItems: "center",
  justifyContent: "center",
  color: "$pText1",
  $$bs: "$colors$indigo5",
  "&:hover": { backgroundColor: "$bgHover" },
  "&:focus": { backgroundColor: "$bgActive" },
});

const Docs = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Layout>
      <Box css={{ p: 20 }}>
        <Text size="h3">Dash-ui test suit</Text>

        {/* RADIO-GROUP */}
        <BaseContainer>
          <LeadText>1. Radio Button</LeadText>
          <Tabs defaultValue="Demo">
            <CustomTabList />
            <TabsContent value="Demo">
              <RadioGroup defaultValue="test">
                <Radio value="test" label="Test" id="test" size="xl" error />
                <Radio value="test2" label="Test 2" id="test2" />
                <Radio value="test3" label="Test 3" id="test3" />
              </RadioGroup>
            </TabsContent>
            <TabsContent value="Code">
              <DisplayCode
                code={`
     <RadioGroup defaultValue='test'>
       <Radio value="test" label="Test" id="test" />
       <Radio value="test2" label="Test 2" id="test2" />
       <Radio value="test3" label="Test 3" id="test3" />
     </RadioGroup>
       `}
              />
            </TabsContent>
            <TabsContent value="Props">radio button props</TabsContent>
          </Tabs>
        </BaseContainer>

        {/* CHECK-BOX */}
        <BaseContainer>
          <LeadText>2. Check box</LeadText>
          <Tabs defaultValue="Demo">
            <CustomTabList />
            <TabsContent value="Demo">
              <Checkbox label="Active" id="active" />
            </TabsContent>
            <TabsContent value="Code">
              <DisplayCode code={`<Checkbox label="Active" id="active" />`} />
            </TabsContent>
            <TabsContent value="Props">checkbox button props</TabsContent>
          </Tabs>
        </BaseContainer>
        {/* TEXT */}

        <BaseContainer>
          <LeadText>3. Text</LeadText>
          <Tabs defaultValue="Demo">
            <CustomTabList />
            <TabsContent value="Demo">
              <Text
                size="h3"
                weight="bold"
                decoration="underline"
                transform="capitalize"
              >
                H3 bold underline capitalized
              </Text>{" "}
            </TabsContent>
            <TabsContent value="Code">
              <DisplayCode
                code={`
        <Text
        size="h3"
        weight="bold"
        decoration="underline"
        transform="capitalize"
      >
        H3 bold underline capitalized
      </Text>
        `}
              />
            </TabsContent>
            <TabsContent value="Props"> text props</TabsContent>
          </Tabs>
        </BaseContainer>

        {/* INPUT */}
        <BaseContainer>
          <LeadText>Input</LeadText>
          <Tabs defaultValue="Demo">
            <CustomTabList />
            <TabsContent value="Demo">
              <Input label="Firstname" id="firstname" required></Input>
            </TabsContent>
            <TabsContent value="Code">
              <DisplayCode
                code={`<Input label="Firstname" id="firstname" required></Input>`}
              />
            </TabsContent>
            <TabsContent value="Props"> button props</TabsContent>
          </Tabs>
        </BaseContainer>

        {/* TABS  */}
        <BaseContainer>
          <LeadText>Tabs</LeadText>
          <Tabs defaultValue="Demo">
            <CustomTabList />
            <TabsContent value="Demo">
              <Tabs defaultValue="tab1">
                <TabsList aria-label="Manage your account">
                  <TabsTrigger value="tab1">Account</TabsTrigger>
                  <TabsTrigger value="tab2">Password</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1">tab1</TabsContent>
                <TabsContent value="tab2">tab2</TabsContent>
              </Tabs>{" "}
            </TabsContent>
            <TabsContent value="Code">
              <DisplayCode
                code={`
             <Tabs defaultValue="tab1">
             <TabsList aria-label="Manage your account">
               <TabsTrigger value="tab1">Account</TabsTrigger>
               <TabsTrigger value="tab2">Password</TabsTrigger>
             </TabsList>
             <TabsContent value="tab1">tab1</TabsContent>
             <TabsContent value="tab2">tab2</TabsContent>
           </Tabs>
            `}
              />
            </TabsContent>
            <TabsContent value="Props"> tabs props</TabsContent>
          </Tabs>
        </BaseContainer>

        {/* DROPDOWN */}
        <BaseContainer>
          <LeadText>Dropdown</LeadText>
          <Tabs defaultValue="Demo">
            <CustomTabList />
            <TabsContent value="Demo">
              <DropdownStyled
                arr={ACTIONS}
                trigger={
                  <TriggerButton aria-label="Customise options">
                    <Text>Menu</Text>
                  </TriggerButton>
                }
                triggerProps={{ asChild: true }}
                onSelect={() => {}}
              />
            </TabsContent>
            <TabsContent value="Code">
              <DisplayCode
                code={`
              <DropdownStyled
              arr={ACTIONS}
              trigger={
                <TriggerButton aria-label="Customise options">
                  <Text>Menu</Text>
                </TriggerButton>
              }
              triggerProps={{ asChild: true }}
              onSelect={() => {}}
            />
              `}
              />
            </TabsContent>
            <TabsContent value="Props"> dropdown props</TabsContent>
          </Tabs>
        </BaseContainer>

        {/* DIALOG MODAL */}
        <BaseContainer>
          <LeadText>Dialog modal</LeadText>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Open Modal</Button>
            </DialogTrigger>
            <DialogContent>
              <Text>Modal content</Text>
              <DialogClose asChild>
                <Button>Close</Button>
              </DialogClose>
            </DialogContent>
          </Dialog>
        </BaseContainer>
      </Box>
    </Layout>
  );
};

export default Docs;
