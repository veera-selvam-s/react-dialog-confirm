import React, { useState } from "react";
import {
  DialogModal,
  DialogProvider,
  useModal,
} from "../components/DialogModal";

export default {
  title: "DialogModal",
  component: DialogModal,
  parameters: {
    docs: {
      description: {
        component:
          "A modern, accessible modal component with multiple variants and features.",
      },
    },
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl", "full"],
      description: "Size of the modal",
    },
    position: {
      control: { type: "select" },
      options: ["center", "top", "bottom", "left", "right"],
      description: "Position of the modal",
    },
    backdrop: {
      control: { type: "select" },
      options: ["blur", "transparent", "solid"],
      description: "Backdrop style",
    },
    loading: {
      control: { type: "boolean" },
      description: "Show loading state",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disable modal interactions",
    },
  },
};

const App = (props) => {
  const { openModal } = useModal();
  const handleClick = () => {
    openModal(<DialogModal {...props} />);
  };
  return (
    <div>
      <button
        onClick={handleClick}
        className="dialog--button dialog--button-confirm"
      >
        Open modal
      </button>
    </div>
  );
};

const Template = (args) => (
  <DialogProvider>
    <App {...args} />
  </DialogProvider>
);

// Basic Stories
export const Success = Template.bind({});
Success.args = {
  icon: "success",
  title: "Successfully accepted!",
  description:
    "Your changes have been saved successfully. You can now continue with your workflow.",
  confirm: "Continue",
  hasCancel: true,
  cancel: "Go Back",
};

export const Info = Template.bind({});
Info.args = {
  icon: "info",
  title: "Information",
  description:
    "This is an informational message. Please review the details before proceeding.",
  confirm: "Got it",
  hasCancel: true,
};

export const Warning = Template.bind({});
Warning.args = {
  icon: "warning",
  title: "Are you sure?",
  description:
    "This action cannot be undone. Please confirm that you want to proceed.",
  confirm: "Yes, proceed",
  hasCancel: true,
  cancel: "Cancel",
};

export const Error = Template.bind({});
Error.args = {
  icon: "error",
  title: "Something went wrong",
  description:
    "An unexpected error occurred. Please try again or contact support if the problem persists.",
  confirm: "Try Again",
  hasCancel: true,
  cancel: "Contact Support",
};

// Size Variants
export const Small = Template.bind({});
Small.args = {
  ...Success.args,
  size: "sm",
  title: "Small Modal",
  description: "This is a small modal for quick confirmations.",
};

export const Large = Template.bind({});
Large.args = {
  ...Success.args,
  size: "lg",
  title: "Large Modal",
  description: "This is a large modal for more detailed content.",
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  ...Success.args,
  size: "xl",
  title: "Extra Large Modal",
  description:
    "This is an extra large modal for complex forms or detailed information.",
};

export const FullScreen = Template.bind({});
FullScreen.args = {
  ...Success.args,
  size: "full",
  title: "Full Screen Modal",
  description: "This is a full screen modal for immersive experiences.",
};

// Position Variants
export const TopPosition = Template.bind({});
TopPosition.args = {
  ...Success.args,
  position: "top",
  title: "Top Positioned Modal",
  description: "This modal appears at the top of the screen.",
};

export const BottomPosition = Template.bind({});
BottomPosition.args = {
  ...Success.args,
  position: "bottom",
  title: "Bottom Positioned Modal",
  description: "This modal appears at the bottom of the screen.",
};

// Backdrop Variants
export const BlurBackdrop = Template.bind({});
BlurBackdrop.args = {
  ...Success.args,
  backdrop: "blur",
  title: "Blur Backdrop",
  description: "This modal has a blurred backdrop effect.",
};

export const TransparentBackdrop = Template.bind({});
TransparentBackdrop.args = {
  ...Success.args,
  backdrop: "transparent",
  title: "Transparent Backdrop",
  description: "This modal has a transparent backdrop.",
};

// Interactive States
export const Loading = Template.bind({});
Loading.args = {
  ...Success.args,
  loading: true,
  title: "Processing...",
  description: "Please wait while we process your request.",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Success.args,
  disabled: true,
  title: "Disabled Modal",
  description:
    "This modal is currently disabled and cannot be interacted with.",
};

// Custom Content
export const CustomContent = Template.bind({});
CustomContent.args = {
  size: "lg",
  title: "Custom Content Modal",
  children: (
    <div style={{ padding: "1rem 0" }}>
      <div style={{ marginBottom: "1rem" }}>
        <h3 style={{ margin: "0 0 0.5rem 0", color: "#374151" }}>
          Custom Form
        </h3>
        <input
          type="text"
          placeholder="Enter your name"
          style={{
            width: "100%",
            padding: "0.5rem",
            border: "1px solid #d1d5db",
            borderRadius: "0.375rem",
            marginBottom: "0.5rem",
          }}
        />
        <textarea
          placeholder="Enter your message"
          rows={4}
          style={{
            width: "100%",
            padding: "0.5rem",
            border: "1px solid #d1d5db",
            borderRadius: "0.375rem",
            resize: "vertical",
          }}
        />
      </div>
    </div>
  ),
  confirm: "Submit",
  hasCancel: true,
  cancel: "Cancel",
};

// Custom Header/Footer
export const CustomHeaderFooter = Template.bind({});
CustomHeaderFooter.args = {
  size: "lg",
  customHeader: (
    <div
      style={{
        borderBottom: "1px solid #e5e7eb",
        padding: "1rem 1.5rem",
        margin: "-1.5rem -1.5rem 1rem -1.5rem",
        background: "#f9fafb",
        borderRadius: "0.75rem 0.75rem 0 0",
      }}
    >
      <h2 style={{ margin: 0, color: "#111827" }}>Custom Header</h2>
      <p
        style={{
          margin: "0.5rem 0 0 0",
          color: "#6b7280",
          fontSize: "0.875rem",
        }}
      >
        This modal has a custom header and footer
      </p>
    </div>
  ),
  customFooter: (
    <div
      style={{
        borderTop: "1px solid #e5e7eb",
        padding: "1rem 1.5rem",
        margin: "1rem -1.5rem -1.5rem -1.5rem",
        background: "#f9fafb",
        borderRadius: "0 0 0.75rem 0.75rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span style={{ color: "#6b7280", fontSize: "0.875rem" }}>
        Custom footer content
      </span>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <button
          className="dialog--button dialog--button-cancel"
          style={{ margin: 0 }}
        >
          Cancel
        </button>
        <button
          className="dialog--button dialog--button-confirm"
          style={{ margin: 0 }}
        >
          Save
        </button>
      </div>
    </div>
  ),
  children: (
    <div style={{ padding: "1rem 0" }}>
      <p>This modal demonstrates custom header and footer components.</p>
      <p>
        You can add any content you want in the header, body, or footer areas.
      </p>
    </div>
  ),
};

// Minimal Modal
export const Minimal = Template.bind({});
Minimal.args = {
  size: "sm",
  showCloseButton: false,
  title: "Minimal Modal",
  description: "A minimal modal without close button and cancel option.",
  confirm: "OK",
};

// Async Action Example
const AsyncExample = (args) => {
  const { openModal } = useModal();
  const [isLoading, setIsLoading] = useState(false);

  const handleAsyncAction = async () => {
    setIsLoading(true);
    // Simulate async operation
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  const handleClick = () => {
    openModal(
      <DialogModal
        {...args}
        loading={isLoading}
        onConfirm={handleAsyncAction}
      />
    );
  };

  return (
    <DialogProvider>
      <button
        onClick={handleClick}
        className="dialog--button dialog--button-confirm"
      >
        Open Async Modal
      </button>
    </DialogProvider>
  );
};

export const AsyncAction = AsyncExample.bind({});
AsyncAction.args = {
  icon: "info",
  title: "Async Action",
  description: "This modal demonstrates an async action with loading state.",
  confirm: "Process Data",
  hasCancel: true,
  cancel: "Cancel",
};
