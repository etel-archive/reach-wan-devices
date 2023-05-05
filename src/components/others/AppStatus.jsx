import { AiOutlineDelete } from 'react-icons/ai';
import { useGetData, useDelete, usePostData } from '../../hooks';
import { Error, Loading, Success } from '../utils';
import { useRef } from 'react';
import { useState } from 'react';

const AppStatus = () => {
  const { data: appStatus, isLoading } = useGetData('/ufw_app_rule_status');
  const { deleteData, isLoading: isDeleting } = useDelete();

  return (
    <>
      <h2>App Status</h2>
      {isLoading && <Loading text={'Loading...'} iconSize={30} />}
      {!appStatus || appStatus?.length < 1 ? (
        <div>No app status data</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Action</th>
              <th>Application</th>
              <th>Rule Number</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {appStatus?.map((entry, index) => (
              <tr key={index}>
                <td>{entry.action}</td>
                <td>{entry.application}</td>
                <td>{entry.rule_number}</td>
                <td
                  onClick={() =>
                    deleteData(
                      '/ufw_app_rule_delete?rule_number=' + entry.rule_number
                    )
                  }
                  aria-disabled={isDeleting}
                >
                  <AiOutlineDelete
                    size={20}
                    color="crimson"
                    style={{ cursor: 'pointer' }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <hr />

      <AddAppRule />
    </>
  );
};

const AddAppRule = () => {
  const { isLoading, postData, error } = usePostData();
  const [success, setSuccess] = useState(null);

  const actionRef = useRef();
  const appRef = useRef();

  return (
    <div>
      <h2>Add App Rule</h2>
      {isLoading && <Loading text={'Saving...'} iconSize={20} />}
      {error && <Error />}
      {success && <Success msg={success} />}
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const jsonBody = {
            action: actionRef.current.value,
            app: +appRef.current.value,
          };
          await postData('/ufw_app_rule_add', jsonBody);
          setSuccess('Saved: Refresh the page to see the changes.');
        }}
      >
        <div className="inputs">
          <div className="input-wrapper">
            <label htmlFor="action">Action: </label> <br />
            <input
              id="action"
              type="text"
              className="input"
              ref={actionRef}
              placeholder="action"
              disabled={isLoading}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="app">App: </label> <br />
            <input
              id="app"
              type="text"
              className="input"
              ref={appRef}
              placeholder="app"
              disabled={isLoading}
            />
          </div>
        </div>
        <div className="submit-wrapper">
          <input
            type="submit"
            style={{ float: 'right', margin: '2rem' }}
            value="Save Config"
            disabled={isLoading}
          />
        </div>
      </form>
    </div>
  );
};

export default AppStatus;
