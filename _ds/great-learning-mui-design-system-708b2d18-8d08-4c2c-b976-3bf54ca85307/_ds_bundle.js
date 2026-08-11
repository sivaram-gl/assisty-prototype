/* @ds-bundle: {"format":3,"namespace":"GreatLearningMUIDesignSystem_708b2d","components":[],"sourceHashes":{"ui_kits/docs-site/ComponentsPage.jsx":"63b6219e688e","ui_kits/docs-site/FoundationsPage.jsx":"5b19f3838fcb","ui_kits/docs-site/HomePage.jsx":"77390e4c3016","ui_kits/docs-site/Primitives.jsx":"9325cc687ede","ui_kits/docs-site/Sidebar.jsx":"8816ce36ad3d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GreatLearningMUIDesignSystem_708b2d = window.GreatLearningMUIDesignSystem_708b2d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/docs-site/ComponentsPage.jsx
try { (() => {
/* eslint-disable no-undef */
const {
  useState
} = React;
function SubSection({
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "t-subtitle2",
    style: {
      marginBottom: 12
    }
  }, title), children);
}
function ComponentsPage() {
  const [email, setEmail] = useState('');
  const [alignment, setAlignment] = useState('bold');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      animation: 'fadeIn .5s ease-out'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 12,
      padding: '40px 32px',
      marginBottom: 40,
      background: 'linear-gradient(135deg, #FFF8E1 0%, #E8F0FC 100%)',
      border: '1px solid rgba(0,0,0,0.04)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-overline",
    style: {
      color: 'var(--text-secondary)',
      marginBottom: 8,
      display: 'block'
    }
  }, "UI Building Blocks"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 40,
      fontWeight: 700,
      letterSpacing: '-0.5px',
      marginBottom: 12
    }
  }, "Components"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 560,
      lineHeight: 1.7,
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, "Production-ready MUI components themed with Olympus tokens. Every variant maps 1:1 to the Figma library.")), /*#__PURE__*/React.createElement(Section, {
    title: "Buttons",
    description: "Contained, Outlined, Text variants across all semantic colors."
  }, /*#__PURE__*/React.createElement(SubSection, {
    title: "Contained"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, null, "Primary"), /*#__PURE__*/React.createElement(Button, {
    color: "error"
  }, "Error"), /*#__PURE__*/React.createElement(Button, {
    color: "warning"
  }, "Warning"), /*#__PURE__*/React.createElement(Button, {
    color: "success"
  }, "Success"), /*#__PURE__*/React.createElement(Button, {
    disabled: true
  }, "Disabled"), /*#__PURE__*/React.createElement(Button, {
    endIcon: "send"
  }, "With Icon"))), /*#__PURE__*/React.createElement(SubSection, {
    title: "Outlined"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outlined"
  }, "Primary"), /*#__PURE__*/React.createElement(Button, {
    variant: "outlined",
    color: "error"
  }, "Error"), /*#__PURE__*/React.createElement(Button, {
    variant: "outlined",
    color: "success"
  }, "Success"), /*#__PURE__*/React.createElement(Button, {
    variant: "outlined",
    disabled: true
  }, "Disabled"))), /*#__PURE__*/React.createElement(SubSection, {
    title: "Text"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "text"
  }, "Primary"), /*#__PURE__*/React.createElement(Button, {
    variant: "text",
    color: "error"
  }, "Error"), /*#__PURE__*/React.createElement(Button, {
    variant: "text",
    color: "success"
  }, "Success"))), /*#__PURE__*/React.createElement(SubSection, {
    title: "Sizes"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "small"
  }, "Small"), /*#__PURE__*/React.createElement(Button, {
    size: "medium"
  }, "Medium"), /*#__PURE__*/React.createElement(Button, {
    size: "large"
  }, "Large"))), /*#__PURE__*/React.createElement(SubSection, {
    title: "Icon Buttons"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    color: "primary"
  }, "edit"), /*#__PURE__*/React.createElement(IconButton, {
    color: "error"
  }, "delete"), /*#__PURE__*/React.createElement(IconButton, null, "more_vert"), /*#__PURE__*/React.createElement(IconButton, {
    color: "primary"
  }, "add")))), /*#__PURE__*/React.createElement(Section, {
    title: "Chips",
    description: "Pill-shaped 12/500 labels \u2014 filled and outlined variants across all semantic colors."
  }, /*#__PURE__*/React.createElement(SubSection, {
    title: "Filled"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    label: "Default"
  }), /*#__PURE__*/React.createElement(Chip, {
    label: "Primary",
    color: "primary"
  }), /*#__PURE__*/React.createElement(Chip, {
    label: "Error",
    color: "error"
  }), /*#__PURE__*/React.createElement(Chip, {
    label: "Warning",
    color: "warning"
  }), /*#__PURE__*/React.createElement(Chip, {
    label: "Success",
    color: "success"
  }), /*#__PURE__*/React.createElement(Chip, {
    label: "Info",
    color: "info"
  }), /*#__PURE__*/React.createElement(Chip, {
    label: "Deletable",
    color: "primary",
    onDelete: () => {}
  }), /*#__PURE__*/React.createElement(Chip, {
    label: "Clickable",
    color: "primary",
    onClick: () => {}
  }))), /*#__PURE__*/React.createElement(SubSection, {
    title: "Outlined"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    label: "Primary",
    variant: "outlined",
    color: "primary"
  }), /*#__PURE__*/React.createElement(Chip, {
    label: "Error",
    variant: "outlined",
    color: "error"
  }), /*#__PURE__*/React.createElement(Chip, {
    label: "Success",
    variant: "outlined",
    color: "success"
  }), /*#__PURE__*/React.createElement(Chip, {
    label: "With icon",
    variant: "outlined",
    color: "primary",
    icon: "face"
  })))), /*#__PURE__*/React.createElement(Section, {
    title: "Alerts",
    description: "Four severities. Title uses alertTitle (16/500), body uses body2 (14/400). 190p tint backgrounds."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    severity: "error",
    title: "Error"
  }, "Something went wrong \u2014 please retry."), /*#__PURE__*/React.createElement(Alert, {
    severity: "warning",
    title: "Warning"
  }, "You have unsaved changes in this document."), /*#__PURE__*/React.createElement(Alert, {
    severity: "success",
    title: "Success"
  }, "Your changes have been saved."), /*#__PURE__*/React.createElement(Alert, {
    severity: "info",
    title: "Info",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "text",
      size: "small"
    }, "UNDO")
  }, "New tokens are available in the theme package."))), /*#__PURE__*/React.createElement(Section, {
    title: "Text Fields",
    description: "Outlined variant shown. Label floats, helper below, error switches all colors."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(TextField, {
    label: "Email",
    value: email,
    onChange: e => setEmail(e.target.value),
    helper: "We'll never share your email",
    startIcon: "mail"
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "Search",
    value: "",
    onChange: () => {},
    startIcon: "search"
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "Password",
    value: "\u2022\u2022\u2022\u2022\u2022\u2022",
    onChange: () => {},
    type: "password",
    endIcon: "visibility"
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "Required",
    value: "",
    onChange: () => {},
    error: true,
    helper: "This field is required"
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "Disabled",
    value: "Read-only",
    onChange: () => {},
    disabled: true
  }))), /*#__PURE__*/React.createElement(Section, {
    title: "Cards",
    description: "Elevation 1 at rest, radius 4, padding via spacing scale. Outlined variant for quieter surfaces."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("h5", {
    style: {
      marginBottom: 8
    }
  }, "Basic Card"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--text-secondary)',
      lineHeight: 1.7,
      marginBottom: 16
    }
  }, "Elevation 1, paper background, 4px radius. Used across most of the system."), /*#__PURE__*/React.createElement(Button, {
    variant: "text",
    size: "small"
  }, "Learn More"))), /*#__PURE__*/React.createElement(Card, {
    variant: "outlined"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-overline",
    style: {
      color: 'var(--text-secondary)'
    }
  }, "Outlined"), /*#__PURE__*/React.createElement("h5", {
    style: {
      marginBottom: 8,
      marginTop: 4
    }
  }, "Outlined Card"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--text-secondary)',
      lineHeight: 1.7,
      marginBottom: 16
    }
  }, "1px border using the outlined-border token. No shadow."), /*#__PURE__*/React.createElement(Button, {
    variant: "text",
    size: "small"
  }, "Action"))), /*#__PURE__*/React.createElement(Card, {
    onClick: () => {}
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: 'var(--success-main)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 18,
      fontWeight: 400
    }
  }, "+"), /*#__PURE__*/React.createElement("h5", null, "Interactive")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--text-secondary)',
      lineHeight: 1.7,
      margin: 0
    }
  }, "Hover me. Elevation lifts from 1 to 4."))))), /*#__PURE__*/React.createElement(Section, {
    title: "Selection Controls",
    description: "Checkboxes, Radios, Switches, Sliders, and Ratings. All use semantic palette colors."
  }, /*#__PURE__*/React.createElement(SubSection, {
    title: "Checkboxes"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, [{
    label: 'Checked',
    checked: true,
    color: 'primary'
  }, {
    label: 'Unchecked',
    checked: false
  }, {
    label: 'Error',
    checked: true,
    color: 'error'
  }, {
    label: 'Warning',
    checked: true,
    color: 'warning'
  }, {
    label: 'Success',
    checked: true,
    color: 'success'
  }].map(cb => /*#__PURE__*/React.createElement("label", {
    key: cb.label,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: 2,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: cb.checked ? `var(--${cb.color}-main)` : 'transparent',
      border: cb.checked ? 'none' : '2px solid var(--action-active)',
      color: '#fff'
    }
  }, cb.checked && /*#__PURE__*/React.createElement("span", {
    className: "material-icons-outlined",
    style: {
      fontSize: 14
    }
  }, "check")), cb.label)))), /*#__PURE__*/React.createElement(SubSection, {
    title: "Radio Buttons"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24
    }
  }, ['Free', 'Pro', 'Enterprise'].map((opt, i) => /*#__PURE__*/React.createElement("label", {
    key: opt,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: '50%',
      border: `2px solid ${i === 1 ? 'var(--primary-main)' : 'var(--action-active)'}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, i === 1 && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--primary-main)'
    }
  })), opt)))), /*#__PURE__*/React.createElement(SubSection, {
    title: "Switches"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      alignItems: 'center'
    }
  }, [{
    label: 'On',
    on: true,
    c: '--primary-main'
  }, {
    label: 'Off',
    on: false
  }, {
    label: 'Warning',
    on: true,
    c: '--warning-main'
  }, {
    label: 'Success',
    on: true,
    c: '--success-main'
  }].map(sw => /*#__PURE__*/React.createElement("label", {
    key: sw.label,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 20,
      borderRadius: 10,
      position: 'relative',
      background: sw.on ? `var(${sw.c})` : 'var(--action-disabled)',
      display: 'inline-block'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: sw.on ? 18 : 2,
      width: 16,
      height: 16,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-1)'
    }
  })), sw.label)))), /*#__PURE__*/React.createElement(SubSection, {
    title: "Rating"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2,
      alignItems: 'center'
    }
  }, [1, 2, 3, 4, 5].map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      fontSize: 24,
      color: s <= 3 ? 'var(--rating-active)' : 'var(--action-disabled)',
      cursor: 'pointer'
    }
  }, "\u2605")), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 8,
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-secondary)'
    }
  }, "3 stars")))), /*#__PURE__*/React.createElement(Section, {
    title: "Navigation",
    description: "Tabs, Breadcrumbs, Pagination, Stepper, and Bottom Navigation."
  }, /*#__PURE__*/React.createElement(SubSection, {
    title: "Tabs"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--divider)',
      display: 'flex',
      marginBottom: 8
    }
  }, ['Overview', 'Analytics', 'Reports', 'Disabled'].map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      padding: '10px 16px',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 500,
      color: i === 0 ? 'var(--primary-main)' : i === 3 ? 'var(--text-disabled)' : 'var(--text-secondary)',
      borderBottom: i === 0 ? '2px solid var(--primary-main)' : '2px solid transparent',
      cursor: i === 3 ? 'not-allowed' : 'pointer'
    }
  }, t)))), /*#__PURE__*/React.createElement(SubSection, {
    title: "Breadcrumbs"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      cursor: 'pointer'
    }
  }, "Home"), " / ", /*#__PURE__*/React.createElement("span", {
    style: {
      cursor: 'pointer'
    }
  }, "Projects"), " / ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-primary)'
    }
  }, "Settings"))), /*#__PURE__*/React.createElement(SubSection, {
    title: "Pagination"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, ['‹', 1, 2, 3, 4, 5, '›'].map((p, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      cursor: 'pointer',
      background: p === 2 ? 'var(--primary-main)' : 'transparent',
      color: p === 2 ? '#fff' : 'var(--text-primary)'
    }
  }, p)))), /*#__PURE__*/React.createElement(SubSection, {
    title: "Stepper"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      borderRadius: '50%',
      background: 'var(--primary-main)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-icons-outlined",
    style: {
      fontSize: 14
    }
  }, "check")), " Account"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--divider)',
      margin: '0 16px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      borderRadius: '50%',
      background: 'var(--primary-main)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 12,
      fontWeight: 500
    }
  }, "2"), " Preferences"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--divider)',
      margin: '0 16px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 14,
      color: 'var(--text-disabled)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      borderRadius: '50%',
      background: 'var(--action-disabled)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 12,
      fontWeight: 500
    }
  }, "3"), " Review"))), /*#__PURE__*/React.createElement(SubSection, {
    title: "Bottom Navigation"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      maxWidth: 360,
      background: 'var(--bg-paper)',
      boxShadow: 'var(--shadow-4)',
      borderRadius: 4
    }
  }, [{
    icon: 'home',
    label: 'Home',
    active: true
  }, {
    icon: 'favorite',
    label: 'Favorites'
  }, {
    icon: 'person',
    label: 'Profile'
  }].map(n => /*#__PURE__*/React.createElement("div", {
    key: n.label,
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2,
      padding: '8px 0',
      cursor: 'pointer',
      color: n.active ? 'var(--primary-main)' : 'var(--action-active)',
      fontFamily: 'var(--font-sans)',
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-icons-outlined",
    style: {
      fontSize: 22
    }
  }, n.icon), n.label))))), /*#__PURE__*/React.createElement(Section, {
    title: "Tables",
    description: "Header uses tableHeader (14/500), body uses body2 (14/400). Dividers use the Other/Divider token."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--outlined-border)',
      borderRadius: 4,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      borderBottom: '1px solid var(--divider)'
    }
  }, ['Name', 'Email', 'Role', 'Status'].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      textAlign: 'left',
      padding: '10px 16px',
      fontSize: 14,
      fontWeight: 500
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, [{
    n: 'Alice Johnson',
    e: 'alice@example.com',
    r: 'Admin',
    s: 'Active',
    c: 'success'
  }, {
    n: 'Bob Smith',
    e: 'bob@example.com',
    r: 'Editor',
    s: 'Active',
    c: 'success'
  }, {
    n: 'Carol Williams',
    e: 'carol@example.com',
    r: 'Viewer',
    s: 'Inactive',
    c: 'error'
  }, {
    n: 'Dan Brown',
    e: 'dan@example.com',
    r: 'Editor',
    s: 'Pending',
    c: 'warning'
  }].map(r => /*#__PURE__*/React.createElement("tr", {
    key: r.n,
    style: {
      borderBottom: '1px solid var(--divider)'
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '10px 16px',
      fontSize: 14,
      fontWeight: 500
    }
  }, r.n), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '10px 16px',
      fontSize: 14
    }
  }, r.e), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '10px 16px',
      fontSize: 14
    }
  }, r.r), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '10px 16px'
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    label: r.s,
    color: r.c
  })))))))), /*#__PURE__*/React.createElement(Section, {
    title: "Data Display",
    description: "Avatars, Lists, Dividers, and Accordions."
  }, /*#__PURE__*/React.createElement(SubSection, {
    title: "Avatars"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, [{
    c: 'primary',
    l: 'A'
  }, {
    c: 'error',
    l: 'B'
  }, {
    c: 'warning',
    l: 'C'
  }, {
    c: 'success',
    l: 'D'
  }, {
    c: 'info',
    l: 'E'
  }].map(a => /*#__PURE__*/React.createElement("div", {
    key: a.l,
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: `var(--${a.c}-main)`,
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 20
    }
  }, a.l)))), /*#__PURE__*/React.createElement(SubSection, {
    title: "List"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--outlined-border)',
      borderRadius: 4,
      width: 260,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: '48px',
      padding: '0 16px',
      color: 'var(--text-secondary)'
    }
  }, "Navigation"), ['inbox', 'drafts', 'send', 'star'].map((ic, i) => /*#__PURE__*/React.createElement("div", {
    key: ic,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '8px 16px',
      cursor: 'pointer',
      background: i === 0 ? 'var(--action-selected)' : 'transparent',
      fontSize: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-icons-outlined",
    style: {
      fontSize: 22,
      color: 'var(--action-active)'
    }
  }, ic), ic.charAt(0).toUpperCase() + ic.slice(1)))))), /*#__PURE__*/React.createElement(Section, {
    title: "Dialogs & Overlays",
    description: "Dialogs use elevation 24, menus elevation 8, tooltips use tooltip typography (10/500)."
  }, /*#__PURE__*/React.createElement(SubSection, {
    title: "Dialog"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--backdrop-overlay)',
      borderRadius: 4,
      padding: 40,
      maxWidth: 480
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-paper)',
      borderRadius: 4,
      boxShadow: 'var(--shadow-24)',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      marginBottom: 8
    }
  }, "Discard changes?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--text-secondary)',
      lineHeight: 1.43,
      marginBottom: 20
    }
  }, "You have unsaved changes. This action cannot be undone."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "text"
  }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
    color: "error"
  }, "Discard"))))), /*#__PURE__*/React.createElement(SubSection, {
    title: "Menu"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-paper)',
      boxShadow: 'var(--shadow-8)',
      borderRadius: 4,
      width: 160,
      padding: '8px 0'
    }
  }, ['Profile', 'My Account', 'Logout'].map(m => /*#__PURE__*/React.createElement("div", {
    key: m,
    style: {
      padding: '8px 16px',
      fontSize: 16,
      cursor: 'pointer'
    }
  }, m)))), /*#__PURE__*/React.createElement(SubSection, {
    title: "Tooltips"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, ['Info tooltip', 'Help tooltip'].map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      background: 'var(--grey-700)',
      color: '#fff',
      padding: '4px 8px',
      borderRadius: 4,
      fontSize: 10,
      fontWeight: 500
    }
  }, t))))), /*#__PURE__*/React.createElement(Section, {
    title: "Feedback",
    description: "Snackbars, Progress indicators, Skeletons, and Badges."
  }, /*#__PURE__*/React.createElement(SubSection, {
    title: "Progress"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      marginBottom: 16
    }
  }, [24, 40, 56].map(sz => /*#__PURE__*/React.createElement("div", {
    key: sz,
    style: {
      width: sz,
      height: sz,
      borderRadius: '50%',
      border: '3px solid var(--action-disabled-bg)',
      borderTopColor: 'var(--primary-main)',
      animation: 'spin 1s linear infinite'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      maxWidth: 300
    }
  }, [{
    w: '45%',
    c: '--primary-main'
  }, {
    w: '100%',
    c: '--success-main'
  }, {
    w: '30%',
    c: '--error-main'
  }].map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      height: 4,
      borderRadius: 2,
      background: 'var(--action-disabled-bg)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: p.w,
      height: '100%',
      background: `var(${p.c})`,
      borderRadius: 2
    }
  }))))), /*#__PURE__*/React.createElement(SubSection, {
    title: "Skeletons"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 300
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: 'var(--action-disabled-bg)',
      animation: 'pulse 1.5s ease-in-out infinite',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: 14,
      borderRadius: 4,
      background: 'var(--action-disabled-bg)',
      animation: 'pulse 1.5s ease-in-out infinite'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '60%',
      height: 12,
      borderRadius: 4,
      background: 'var(--action-disabled-bg)',
      animation: 'pulse 1.5s ease-in-out infinite'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: 80,
      borderRadius: 4,
      background: 'var(--action-disabled-bg)',
      animation: 'pulse 1.5s ease-in-out infinite'
    }
  }))), /*#__PURE__*/React.createElement(SubSection, {
    title: "Badges"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 32,
      alignItems: 'center'
    }
  }, [{
    icon: 'mail',
    count: '4',
    c: '--primary-main'
  }, {
    icon: 'notifications',
    count: '12',
    c: '--error-main'
  }, {
    icon: 'mail',
    count: '99',
    c: '--warning-main'
  }].map((b, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: 'relative',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-icons-outlined",
    style: {
      fontSize: 24,
      color: 'var(--action-active)'
    }
  }, b.icon), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -6,
      right: -6,
      minWidth: 18,
      height: 18,
      borderRadius: 9,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: `var(${b.c})`,
      color: '#fff',
      fontSize: 11,
      fontWeight: 500,
      padding: '0 5px'
    }
  }, b.count))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-icons-outlined",
    style: {
      fontSize: 24,
      color: 'var(--action-active)'
    }
  }, "mail"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -2,
      right: -2,
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--success-main)'
    }
  })))), /*#__PURE__*/React.createElement(SubSection, {
    title: "Snackbar"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--snackbar-bg)',
      color: '#fff',
      borderRadius: 4,
      padding: '10px 16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      maxWidth: 400,
      boxShadow: 'var(--shadow-8)',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", null, "This is a snackbar message"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--primary-light)',
      fontWeight: 500,
      cursor: 'pointer'
    }
  }, "Undo")))));
}
Object.assign(window, {
  ComponentsPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/docs-site/ComponentsPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/docs-site/FoundationsPage.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* eslint-disable no-undef */

const PRIMARY = [{
  label: 'Light',
  token: 'primary.light',
  color: 'var(--primary-light)'
}, {
  label: 'Main',
  token: 'primary.main',
  color: 'var(--primary-main)'
}, {
  label: 'Dark',
  token: 'primary.dark',
  color: 'var(--primary-dark)'
}];
const ERROR = [{
  label: 'Light',
  token: 'error.light',
  color: 'var(--error-light)'
}, {
  label: 'Main',
  token: 'error.main',
  color: 'var(--error-main)'
}, {
  label: 'Dark',
  token: 'error.dark',
  color: 'var(--error-dark)'
}];
const WARNING = [{
  label: 'Light',
  token: 'warning.light',
  color: 'var(--warning-light)'
}, {
  label: 'Main',
  token: 'warning.main',
  color: 'var(--warning-main)'
}, {
  label: 'Dark',
  token: 'warning.dark',
  color: 'var(--warning-dark)'
}];
const SUCCESS = [{
  label: 'Light',
  token: 'success.light',
  color: 'var(--success-light)'
}, {
  label: 'Main',
  token: 'success.main',
  color: 'var(--success-main)'
}, {
  label: 'Dark',
  token: 'success.dark',
  color: 'var(--success-dark)'
}];
const GREYS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
const TYPE_ROWS = [{
  spec: 'h1 · 32/600',
  className: 't-h1',
  sample: 'Headline 1 — the quick brown fox'
}, {
  spec: 'h2 · 28/600',
  className: 't-h2',
  sample: 'Headline 2 — the quick brown fox'
}, {
  spec: 'h3 · 24/600',
  className: 't-h3',
  sample: 'Headline 3 — the quick brown fox'
}, {
  spec: 'h4 · 20/600',
  className: 't-h4',
  sample: 'Headline 4 — the quick brown fox'
}, {
  spec: 'h5 · 18/600',
  className: 't-h5',
  sample: 'Headline 5 — the quick brown fox'
}, {
  spec: 'subtitle1 · 16/500',
  className: 't-subtitle1',
  sample: 'Subtitle 1 — section lead-in'
}, {
  spec: 'body1 · 16/400',
  className: 't-body1',
  sample: 'Body 1 — default paragraph size'
}, {
  spec: 'body2 · 14/400',
  className: 't-body2',
  sample: 'Body 2 — dense content'
}, {
  spec: 'caption · 12/400',
  className: 't-caption',
  sample: 'Caption — helper text and annotations'
}, {
  spec: 'overline · 10/600',
  className: 't-overline',
  sample: 'Overline eyebrow'
}];
const SPACING = [{
  i: 0,
  px: 0
}, {
  i: 1,
  px: 4
}, {
  i: 2,
  px: 8
}, {
  i: 3,
  px: 16
}, {
  i: 4,
  px: 24
}, {
  i: 5,
  px: 32
}, {
  i: 6,
  px: 40
}, {
  i: 7,
  px: 48
}, {
  i: 8,
  px: 64
}, {
  i: 9,
  px: 96
}, {
  i: 10,
  px: 128
}];
function ColorGroup({
  title,
  swatches
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-overline",
    style: {
      color: 'var(--text-secondary)',
      marginBottom: 12,
      display: 'block'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 16
    }
  }, swatches.map(s => /*#__PURE__*/React.createElement(Swatch, _extends({
    key: s.token
  }, s)))));
}
function FoundationsPage() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      animation: 'fadeIn .5s ease-out'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 12,
      padding: '40px 32px',
      marginBottom: 40,
      background: 'linear-gradient(135deg, #F3E5F5 0%, #E8F0FC 50%, #E9F8EB 100%)',
      border: '1px solid rgba(0,0,0,0.04)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-overline",
    style: {
      color: 'var(--text-secondary)',
      marginBottom: 8,
      display: 'block'
    }
  }, "Design Tokens"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 40,
      fontWeight: 700,
      letterSpacing: '-0.5px',
      marginBottom: 12
    }
  }, "Foundations"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 560,
      lineHeight: 1.7,
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, "The visual language that powers every component \u2014 color, type, spacing, and elevation. Every token maps 1:1 to a Figma variable.")), /*#__PURE__*/React.createElement(Section, {
    title: "Color Palette",
    description: "All semantic colors, grey scale, text, background, and elevation tokens. Every color switches automatically between light and dark mode."
  }, /*#__PURE__*/React.createElement(ColorGroup, {
    title: "Primary",
    swatches: PRIMARY
  }), /*#__PURE__*/React.createElement(ColorGroup, {
    title: "Error",
    swatches: ERROR
  }), /*#__PURE__*/React.createElement(ColorGroup, {
    title: "Warning",
    swatches: WARNING
  }), /*#__PURE__*/React.createElement(ColorGroup, {
    title: "Success",
    swatches: SUCCESS
  }), /*#__PURE__*/React.createElement("span", {
    className: "t-overline",
    style: {
      color: 'var(--text-secondary)',
      marginTop: 16,
      marginBottom: 12,
      display: 'block'
    }
  }, "Grey Scale"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      borderRadius: 8,
      overflow: 'hidden'
    }
  }, GREYS.map(g => /*#__PURE__*/React.createElement("div", {
    key: g,
    style: {
      flex: 1,
      height: 64,
      background: `var(--grey-${g})`,
      color: g >= 500 ? '#fff' : '#212121',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 600
    }
  }, g))), /*#__PURE__*/React.createElement("span", {
    className: "t-overline",
    style: {
      color: 'var(--text-secondary)',
      marginTop: 32,
      marginBottom: 12,
      display: 'block'
    }
  }, "Elevation"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, [0, 1, 2, 4, 8, 16, 24].map(e => /*#__PURE__*/React.createElement("div", {
    key: e,
    style: {
      width: 88,
      height: 88,
      borderRadius: 8,
      background: 'var(--bg-paper)',
      boxShadow: `var(--shadow-${e})`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      border: e === 0 ? '1px solid var(--divider)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 700
    }
  }, e), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: 'var(--text-secondary)'
    }
  }, "elevation"))))), /*#__PURE__*/React.createElement(Section, {
    title: "Typography",
    description: "Inter exclusively. Sizes: 10, 12, 14, 16, 18, 20, 24, 28, 32px. Weights: 400 (Regular), 500 (Medium), 600 (SemiBold)."
  }, TYPE_ROWS.map(row => /*#__PURE__*/React.createElement("div", {
    key: row.spec,
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 24,
      padding: '10px 0',
      borderBottom: '1px solid var(--divider)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-secondary)',
      width: 160,
      flexShrink: 0
    }
  }, row.spec), /*#__PURE__*/React.createElement("span", {
    className: row.className
  }, row.sample)))), /*#__PURE__*/React.createElement(Section, {
    title: "Spacing",
    description: "A custom non-linear 4px-base spacing scale. Always use theme.spacing(n) \u2014 never hardcode pixel values."
  }, SPACING.map(sp => /*#__PURE__*/React.createElement("div", {
    key: sp.i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '4px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      textAlign: 'right',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--primary-main)'
    }
  }, sp.i), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: 'relative',
      height: 24,
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '10px 0 10px 0',
      background: 'var(--action-hover)',
      borderRadius: 9999
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: Math.max(2, sp.px),
      height: 24,
      borderRadius: 6,
      background: 'var(--primary-main)',
      opacity: sp.px === 0 ? 0.2 : 0.85,
      position: 'relative'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 56,
      textAlign: 'right',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-secondary)'
    }
  }, sp.px, "px")))));
}
Object.assign(window, {
  FoundationsPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/docs-site/FoundationsPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/docs-site/HomePage.jsx
try { (() => {
/* eslint-disable no-undef */
const {
  useState
} = React;
const FEATURE_CARDS = [{
  title: 'Get Started',
  subtitle: 'Designer & developer guide',
  description: 'Step-by-step setup, token reference, Figma→Code mapping — everything in plain language.',
  icon: 'rocket_launch',
  iconColor: 'var(--warning-main)',
  gradient: 'linear-gradient(135deg, #FFF8E1 0%, #FFF3E0 100%)'
}, {
  title: 'Foundations',
  subtitle: 'Design tokens',
  description: 'Color, typography, spacing & elevation — the visual language behind every component.',
  icon: 'palette',
  iconColor: 'var(--primary-main)',
  gradient: 'linear-gradient(135deg, #E8F0FC 0%, #D6E4F9 100%)',
  route: 'foundations'
}, {
  title: 'Components',
  subtitle: 'UI building blocks',
  description: 'Buttons, inputs, cards, dialogs, tables — production-ready and token-compliant.',
  icon: 'widgets',
  iconColor: 'var(--success-main)',
  gradient: 'linear-gradient(135deg, #E9F8EB 0%, #D4F0D8 100%)',
  route: 'components'
}];
const QUICK_LINKS = [{
  label: 'Color',
  icon: 'color_lens'
}, {
  label: 'Typography',
  icon: 'format_size'
}, {
  label: 'Spacing',
  icon: 'space_bar'
}, {
  label: 'Buttons',
  icon: 'auto_awesome'
}, {
  label: 'Cards',
  icon: 'layers'
}];
const STATS = [{
  value: '100+',
  label: 'Color tokens'
}, {
  value: '20+',
  label: 'Typography variants'
}, {
  value: '11',
  label: 'Spacing scale'
}, {
  value: '25',
  label: 'Elevation levels'
}, {
  value: '15+',
  label: 'Components'
}];
function HomePage({
  setRoute
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      animation: 'fadeIn .5s ease-out'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 12,
      overflow: 'hidden',
      padding: '56px 48px',
      marginBottom: 40,
      background: 'linear-gradient(135deg, #196AE5 0%, #0F4089 40%, #0E39A9 100%)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -80,
      right: -60,
      width: 300,
      height: 300,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -40,
      left: '30%',
      width: 200,
      height: 200,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.04)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '4px 12px',
      borderRadius: 9999,
      background: 'rgba(255,255,255,0.15)',
      color: '#fff',
      fontSize: 13,
      fontWeight: 500,
      border: '1px solid rgba(255,255,255,0.2)',
      backdropFilter: 'blur(8px)',
      marginBottom: 24
    }
  }, "v1.0 \u2014 Olympus Tokens"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 56,
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: '-1px',
      marginBottom: 16,
      maxWidth: 700,
      color: '#fff'
    }
  }, "Great Learning", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.75,
      fontWeight: 400
    }
  }, "MUI Design System")), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 520,
      lineHeight: 1.7,
      fontSize: 17,
      opacity: 0.85,
      margin: 0,
      color: '#fff'
    }
  }, "Token-based. Figma-mapped. Dark mode ready. One theme powers every component with pixel-perfect consistency across your entire product."))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-overline",
    style: {
      color: 'var(--text-secondary)',
      marginBottom: 12,
      display: 'block'
    }
  }, "Jump to"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, QUICK_LINKS.map(link => /*#__PURE__*/React.createElement(Chip, {
    key: link.label,
    icon: link.icon,
    label: link.label,
    variant: "outlined",
    onClick: () => {}
  })))), /*#__PURE__*/React.createElement("span", {
    className: "t-overline",
    style: {
      color: 'var(--text-secondary)',
      marginBottom: 16,
      display: 'block'
    }
  }, "Explore"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24,
      marginBottom: 40
    }
  }, FEATURE_CARDS.map(card => /*#__PURE__*/React.createElement(FeatureCard, {
    key: card.title,
    card: card,
    onClick: () => card.route && setRoute(card.route)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      borderRadius: 12,
      background: 'var(--grey-50)',
      border: '1px solid var(--divider)',
      display: 'flex',
      justifyContent: 'space-around',
      textAlign: 'center',
      flexWrap: 'wrap'
    }
  }, STATS.map(stat => /*#__PURE__*/React.createElement("div", {
    key: stat.label,
    style: {
      minWidth: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 24,
      fontWeight: 700,
      color: 'var(--primary-main)',
      lineHeight: 1.167,
      letterSpacing: '-0.4px'
    }
  }, stat.value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--text-secondary)',
      marginTop: 4
    }
  }, stat.label)))));
}
function FeatureCard({
  card,
  onClick
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: card.gradient,
      border: '1px solid rgba(0,0,0,0.06)',
      borderRadius: 12,
      padding: 32,
      cursor: onClick ? 'pointer' : 'default',
      transform: hover ? 'translateY(-4px)' : 'translateY(0)',
      boxShadow: hover ? 'var(--shadow-8)' : 'none',
      transition: 'transform .2s ease, box-shadow .2s ease',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 8,
      background: 'var(--bg-paper)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-1)',
      marginBottom: 24,
      color: card.iconColor
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-icons-outlined",
    style: {
      fontSize: 32
    }
  }, card.icon)), /*#__PURE__*/React.createElement("span", {
    className: "t-overline",
    style: {
      color: 'var(--text-secondary)',
      marginBottom: 4
    }
  }, card.subtitle), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 8px'
    }
  }, card.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--text-secondary)',
      lineHeight: 1.7,
      marginBottom: 24
    }
  }, card.description), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      color: 'var(--primary-main)',
      fontWeight: 500,
      fontSize: 14
    }
  }, "Explore ", /*#__PURE__*/React.createElement("span", {
    className: "material-icons-outlined",
    style: {
      fontSize: 18
    }
  }, "arrow_forward")));
}
Object.assign(window, {
  HomePage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/docs-site/HomePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/docs-site/Primitives.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* eslint-disable no-undef */
const {
  useState
} = React;

// ─── Button ─────────────────────────────────────────────────────────────
function Button({
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  disabled = false,
  startIcon,
  endIcon,
  children,
  ...rest
}) {
  const sizeMap = {
    small: {
      h: 30,
      px: 10,
      fs: 12,
      lh: 1.66
    },
    medium: {
      h: 36,
      px: 16,
      fs: 14,
      lh: 1.43
    },
    large: {
      h: 42,
      px: 22,
      fs: 16,
      lh: 1.5
    }
  };
  const s = sizeMap[size];
  const c = `var(--${color}-main)`;
  const cDark = `var(--${color}-dark)`;
  const cHover = `var(--${color}-hover, rgba(25,106,229,0.04))`;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: `0 ${s.px}px`,
    height: s.h,
    minWidth: 64,
    borderRadius: 4,
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: s.fs,
    lineHeight: s.lh,
    letterSpacing: '0.4px',
    textTransform: 'none',
    border: 0,
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'background .15s ease, box-shadow .15s ease, border-color .15s ease',
    whiteSpace: 'nowrap'
  };
  const variants = {
    contained: disabled ? {
      background: 'var(--action-disabled-bg)',
      color: 'var(--action-disabled)'
    } : {
      background: c,
      color: '#fff'
    },
    outlined: disabled ? {
      background: 'transparent',
      color: 'var(--action-disabled)',
      border: '1px solid var(--action-disabled-bg)'
    } : {
      background: 'transparent',
      color: c,
      border: `1px solid ${color === 'primary' ? 'var(--primary-50p)' : c}`
    },
    text: disabled ? {
      background: 'transparent',
      color: 'var(--action-disabled)'
    } : {
      background: 'transparent',
      color: c
    }
  };
  const [hover, setHover] = useState(false);
  const hoverStyle = !disabled && hover ? variant === 'contained' ? {
    background: cDark
  } : {
    background: cHover
  } : {};
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...variants[variant],
      ...hoverStyle
    }
  }), startIcon && /*#__PURE__*/React.createElement("span", {
    className: "material-icons-outlined",
    style: {
      fontSize: s.fs + 4
    }
  }, startIcon), children, endIcon && /*#__PURE__*/React.createElement("span", {
    className: "material-icons-outlined",
    style: {
      fontSize: s.fs + 4
    }
  }, endIcon));
}

// ─── IconButton ─────────────────────────────────────────────────────────
function IconButton({
  color = 'action',
  size = 'medium',
  children,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const sz = size === 'small' ? 32 : 40;
  const c = color === 'action' ? 'var(--action-active)' : `var(--${color}-main)`;
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: sz,
      height: sz,
      borderRadius: '50%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 0,
      background: hover ? 'var(--action-hover)' : 'transparent',
      color: c,
      cursor: 'pointer',
      transition: 'background .15s ease'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "material-icons-outlined",
    style: {
      fontSize: size === 'small' ? 18 : 22
    }
  }, children));
}

// ─── Chip ───────────────────────────────────────────────────────────────
function Chip({
  label,
  color = 'default',
  variant = 'filled',
  icon,
  onDelete,
  onClick
}) {
  const [hover, setHover] = useState(false);
  const bg = color === 'default' ? 'var(--action-selected)' : `var(--${color}-main)`;
  const border = color === 'default' ? 'var(--outlined-border)' : `var(--${color}-main)`;
  const fg = color === 'default' ? 'var(--text-primary)' : '#fff';
  const styleFilled = {
    background: bg,
    color: fg
  };
  const styleOutlined = {
    background: 'transparent',
    color: color === 'default' ? 'var(--text-primary)' : `var(--${color}-main)`,
    border: `1px solid ${border}`
  };
  const style = variant === 'filled' ? styleFilled : styleOutlined;
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      padding: '0 10px',
      height: 32,
      borderRadius: 9999,
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 500,
      letterSpacing: 0.16,
      cursor: onClick ? 'pointer' : 'default',
      transition: 'background .15s ease, box-shadow .15s ease',
      boxShadow: hover && onClick ? 'var(--shadow-1)' : 'none',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "material-icons-outlined",
    style: {
      fontSize: 16
    }
  }, icon), label, onDelete && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onDelete();
    },
    style: {
      width: 18,
      height: 18,
      borderRadius: '50%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      background: variant === 'filled' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.1)',
      color: fg,
      marginRight: -4
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-icons-outlined",
    style: {
      fontSize: 12
    }
  }, "close")));
}

// ─── Card ───────────────────────────────────────────────────────────────
function Card({
  variant = 'elevation',
  elevation = 1,
  style,
  children,
  onClick
}) {
  const [hover, setHover] = useState(false);
  const base = {
    background: 'var(--bg-paper)',
    borderRadius: 4,
    overflow: 'hidden',
    transition: 'box-shadow .2s ease, transform .2s ease',
    cursor: onClick ? 'pointer' : 'default',
    ...style
  };
  if (variant === 'outlined') {
    base.border = '1px solid var(--outlined-border)';
  } else {
    base.boxShadow = hover && onClick ? 'var(--shadow-4)' : `var(--shadow-${elevation})`;
  }
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: base
  }, children);
}

// ─── TextField ──────────────────────────────────────────────────────────
function TextField({
  label,
  value,
  onChange,
  error,
  helper,
  type = 'text',
  startIcon,
  endIcon,
  disabled,
  size = 'medium'
}) {
  const [focused, setFocused] = useState(false);
  const h = size === 'small' ? 40 : 52;
  const active = focused || value;
  const borderColor = error ? 'var(--error-main)' : focused ? 'var(--primary-main)' : 'var(--outlined-border)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      flexDirection: 'column',
      gap: 4,
      minWidth: 220
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: h,
      borderRadius: 4,
      border: focused ? `2px solid ${borderColor}` : `1px solid ${borderColor}`,
      padding: focused ? '0 11px' : '0 12px',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      background: disabled ? 'var(--action-disabled-bg)' : 'transparent',
      transition: 'border-color .15s ease'
    }
  }, startIcon && /*#__PURE__*/React.createElement("span", {
    className: "material-icons-outlined",
    style: {
      color: 'var(--action-active)',
      fontSize: 20
    }
  }, startIcon), /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value || '',
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      flex: 1,
      border: 0,
      outline: 0,
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      color: 'var(--text-primary)',
      padding: 0,
      minWidth: 0
    }
  }), endIcon && /*#__PURE__*/React.createElement("span", {
    className: "material-icons-outlined",
    style: {
      color: 'var(--action-active)',
      fontSize: 20
    }
  }, endIcon), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: active ? -7 : h / 2 - 9,
      left: 10,
      padding: active ? '0 4px' : 0,
      background: active ? 'var(--bg-paper)' : 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: active ? 12 : 16,
      fontWeight: 400,
      color: error ? 'var(--error-main)' : focused ? 'var(--primary-main)' : 'var(--text-secondary)',
      pointerEvents: 'none',
      transition: 'all .15s ease'
    }
  }, label)), helper && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      letterSpacing: '0.4px',
      color: error ? 'var(--error-main)' : 'var(--text-secondary)',
      padding: '0 12px'
    }
  }, helper));
}

// ─── Alert ──────────────────────────────────────────────────────────────
function Alert({
  severity = 'info',
  title,
  children,
  action
}) {
  const iconMap = {
    error: 'error_outline',
    warning: 'warning_amber',
    success: 'check_circle_outline',
    info: 'info_outline'
  };
  const bg = `var(--${severity}-bg)`;
  const fg = `var(--${severity}-dark)`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      padding: '8px 16px',
      background: bg,
      color: fg,
      borderRadius: 4,
      alignItems: 'flex-start',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-icons-outlined",
    style: {
      color: `var(--${severity}-main)`,
      fontSize: 22,
      marginTop: 8
    }
  }, iconMap[severity]), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '8px 0'
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '0.15px',
      marginBottom: 2
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.43
    }
  }, children)), action && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 0'
    }
  }, action));
}

// ─── Swatch ─────────────────────────────────────────────────────────────
function Swatch({
  color,
  label,
  token
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 8,
      overflow: 'hidden',
      border: '1px solid var(--divider)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: color,
      height: 64
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 12px',
      background: 'var(--bg-paper)',
      borderTop: '1px solid var(--divider)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-secondary)',
      marginTop: 2
    }
  }, token)));
}
Object.assign(window, {
  Button,
  IconButton,
  Chip,
  Card,
  TextField,
  Alert,
  Swatch
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/docs-site/Primitives.jsx", error: String((e && e.message) || e) }); }

// ui_kits/docs-site/Sidebar.jsx
try { (() => {
/* eslint-disable no-undef */
const {
  useState
} = React;
const NAV_ITEMS = [{
  label: 'Home',
  id: 'home',
  icon: 'home'
}, {
  label: 'Foundations',
  id: 'foundations',
  icon: 'palette'
}, {
  label: 'Components',
  id: 'components',
  icon: 'widgets'
}];
function Sidebar({
  route,
  setRoute,
  theme,
  setTheme
}) {
  const [hovered, setHovered] = useState(false);
  const collapsed = !hovered;
  const width = collapsed ? 80 : 260;
  return /*#__PURE__*/React.createElement("aside", {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      width,
      minWidth: width,
      background: 'var(--bg-paper)',
      borderRight: '1px solid var(--divider)',
      transition: 'width .25s cubic-bezier(0.4,0,0.2,1), min-width .25s cubic-bezier(0.4,0,0.2,1)',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      position: 'sticky',
      top: 0,
      overflow: 'hidden',
      flexShrink: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 64,
      display: 'flex',
      alignItems: 'center',
      justifyContent: collapsed ? 'center' : 'flex-start',
      padding: collapsed ? 0 : '0 16px',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: collapsed ? 36 : 32,
      height: collapsed ? 36 : 32,
      borderRadius: collapsed ? 8 : 6,
      background: 'var(--primary-main)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: collapsed ? 14 : 12,
      letterSpacing: '-0.02em',
      flexShrink: 0
    }
  }, "GL"), !collapsed && /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 700,
      lineHeight: 1.2
    }
  }, "Great Learning"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      color: 'var(--text-secondary)',
      lineHeight: 1
    }
  }, "Design System"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: collapsed ? 4 : 2,
      padding: '16px 0',
      alignItems: collapsed ? 'center' : 'stretch'
    }
  }, NAV_ITEMS.map(item => /*#__PURE__*/React.createElement(NavItem, {
    key: item.id,
    collapsed: collapsed,
    item: item,
    active: route === item.id,
    onClick: () => setRoute(item.id)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--divider)',
      padding: '12px 0',
      display: 'flex',
      alignItems: collapsed ? 'center' : 'stretch',
      flexDirection: 'column'
    }
  }, collapsed ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      border: 0,
      background: 'transparent',
      color: 'var(--text-secondary)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-icons-outlined",
    style: {
      fontSize: 18
    }
  }, theme === 'dark' ? 'light_mode' : 'dark_mode'))) : /*#__PURE__*/React.createElement("div", {
    onClick: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
    style: {
      margin: '0 12px',
      height: 40,
      borderRadius: 8,
      padding: '0 16px',
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      cursor: 'pointer',
      color: 'var(--text-secondary)',
      fontFamily: 'var(--font-sans)',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-icons-outlined",
    style: {
      fontSize: 20
    }
  }, theme === 'dark' ? 'light_mode' : 'dark_mode'), /*#__PURE__*/React.createElement("span", null, theme === 'dark' ? 'Light mode' : 'Dark mode'))));
}
function NavItem({
  collapsed,
  item,
  active,
  onClick
}) {
  const [hover, setHover] = useState(false);
  if (collapsed) {
    return /*#__PURE__*/React.createElement("div", {
      onClick: onClick,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
        padding: '4px 0',
        gap: 2,
        width: '100%'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 52,
        height: 32,
        borderRadius: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: active ? 'var(--primary-main)' : hover ? 'var(--action-hover)' : 'transparent',
        color: active ? '#fff' : 'var(--action-active)',
        transition: 'background .15s ease'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "material-icons-outlined",
      style: {
        fontSize: 22
      }
    }, item.icon)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 10,
        fontWeight: active ? 600 : 400,
        color: active ? 'var(--primary-main)' : 'var(--text-secondary)',
        letterSpacing: '0.02em'
      }
    }, item.label));
  }
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      margin: '0 12px',
      height: 44,
      borderRadius: 8,
      padding: '0 16px',
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      cursor: 'pointer',
      background: active ? 'var(--primary-main)' : hover ? 'var(--action-hover)' : 'transparent',
      color: active ? '#fff' : 'var(--text-primary)',
      transition: 'background .15s ease'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-icons-outlined",
    style: {
      fontSize: 22,
      color: active ? '#fff' : 'var(--action-active)'
    }
  }, item.icon), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: active ? 600 : 400
    }
  }, item.label));
}
Object.assign(window, {
  Sidebar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/docs-site/Sidebar.jsx", error: String((e && e.message) || e) }); }

})();
