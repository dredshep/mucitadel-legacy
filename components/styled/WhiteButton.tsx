import Button from "./Button";

export default function WhiteButton(props) {
  // const classArr = (props.className || "").split(" ");
  // const noButtonBig = classArr.filter((x: string) => x !== "button-big");
  // if (noButtonBig.length < classArr.length)
  //   noButtonBig.push(
  //     // ((PurgeCSS compatibility hack xD)) <div className=
  //     "text-xl"
  //     // />
  //   );
  // alert(noButtonBig);
  return (
    <Button
      {...props}
      className={
        "bg-white active:bg-white-active hover:bg-white-hover text-mupurple active:text-mupurple-active hover:text-mupurple-hover " +
        props.className
      }
    >
      {props.children}
    </Button>
  );
}
