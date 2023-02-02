import GetFeedback from './GetFeedback/GetFeedback';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'flex-start',
        fontSize: 40,
        color: '#010101',
        marginLeft: '50px',
      }}
    >
      <GetFeedback />
    </div>
  );
};
