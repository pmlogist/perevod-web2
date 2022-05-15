import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group";

export interface TransitionProps {
  location: string;
  children: React.ReactNode;
}

const TIMEOUT = 200;

const getTransitionStyles = {
  entering: {
    position: `absolute`,
    opacity: 0,
  },

  entered: {
    transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
    opacity: 1,
    animation: "blink .3s linear 2",
  },
  exiting: {
    transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
    opacity: 0,
  },
};

export const Transition = (props: TransitionProps) => {
  const { children, location } = props;
  return (
    <TransitionGroup>
      <ReactTransition
        key={location}
        timeout={{ enter: TIMEOUT, exit: TIMEOUT }}
      >
        {(status) => (
          <div style={{ ...getTransitionStyles[status] }}>{children}</div>
        )}
      </ReactTransition>
    </TransitionGroup>
  );
};
