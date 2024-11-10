import Text "mo:base/Text";
import Nat "mo:base/Nat";

actor {
    // Stable variable to store visit count
    stable var visitCount : Nat = 0;

    // Query call to get bio information
    public query func getBio() : async Text {
        return "Daniel Jaffe is a passionate investor at 9Yards Capital with a deep love for logistics. His investment philosophy is driven by the belief that efficient logistics networks are the backbone of modern commerce. Through strategic investments in innovative logistics solutions, Daniel aims to revolutionize how goods move across the globe.";
    };

    // Update call to increment and get visit count
    public func incrementVisits() : async Nat {
        visitCount += 1;
        return visitCount;
    };

    // Query call to get current visit count
    public query func getVisits() : async Nat {
        return visitCount;
    };
}
