import { Card } from "@shared/ui/atoms/card/card";
import React from "React";

export const BoardCard = () => {
  return (
    <Card>
      <div className="card-body">
        <div
          onClick={() => console.log("Board")}
          className="boards-card-content"
        >
          <div className="board-card__img">
            <img
              src="https://images.unsplash.com/photo-1648116552330-2c88a7d1ee0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
              className="img-cover"
            />
          </div>
          <p className="board-name__header">Test</p>
          {/* <div className="board-members">
            <div className="all-board-members_card">
              {board.members.slice(0, 3).map((member, index) => {
                return (
                  <div
                    key={index}
                    className="board-member__img"
                  >
                    <img
                      src={member.avatar}
                      alt=""
                      className="img-cover"
                    />
                  </div>
                );
              })}
              {board.members.slice(2, -1).length > 0 && (
                <p className="board-members__p">
                  {`+ ${board.members.slice(2, -1).length
                    } others`}
                </p>
              )}
            </div>
          </div> */}
        </div>
      </div>
    </Card>
  );
};
